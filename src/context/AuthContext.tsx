import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '../utils/supabaseClient';
import { getFullHomePageUrl } from '../utils/routing';

interface AuthContextType {
  session: any;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<any>;
  signUpWithEmail: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If Supabase is not configured, skip auth setup
    if (!supabase) {
      setLoading(false);
      return;
    }

    // Get initial session
    const checkInitialSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) {
          console.error('Error getting session:', error.message);
        } else {
          setSession(session);
        }
      } catch (error: any) {
        console.error('Unexpected error getting session:', error.message);
      } finally {
        setLoading(false);
      }
    };

    checkInitialSession();

    // Listen to auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        // Handle OAuth callback - if we get a SIGNED_IN event, the session is ready
        if (event === 'SIGNED_IN' && session) {
          // Session is now available, the AuthWrapper will handle redirect
        }
      }
    );

    // Cleanup subscription on unmount
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signInWithGoogle = async () => {
    if (!supabase) {
      throw new Error('Supabase is not configured. Please set SUPABASE_URL and SUPABASE_ANON_KEY environment variables.');
    }
    try {
      // Get home page URL for OAuth redirect - /humanoid-robotics/
      const redirectUrl = getFullHomePageUrl();
      
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: redirectUrl || undefined,
        },
      });
      if (error) {
        // Extract error message from different possible error formats
        const errorMsg = error.msg || error.message || JSON.stringify(error);
        const errorCode = error.error_code || error.code;
        
        // Provide helpful error message for common issues
        if (
          errorMsg?.includes('provider is not enabled') || 
          errorMsg?.includes('Unsupported provider') ||
          errorCode === 'validation_failed' ||
          errorCode === 400
        ) {
          const helpfulMessage = 
            'Google OAuth provider is not enabled in your Supabase project.\n\n' +
            'To fix this:\n' +
            '1. Go to your Supabase Dashboard: https://app.supabase.com\n' +
            '2. Navigate to: Authentication → Providers → Google\n' +
            '3. Enable the Google provider\n' +
            '4. Configure OAuth credentials:\n' +
            '   - Get credentials from Google Cloud Console: https://console.cloud.google.com/apis/credentials\n' +
            '   - Add redirect URI: https://YOUR_PROJECT_REF.supabase.co/auth/v1/callback\n' +
            '   - Copy Client ID and Client Secret to Supabase\n' +
            '5. Save and try again';
          
          throw new Error(helpfulMessage);
        }
        // Re-throw with a more readable format
        throw new Error(errorMsg || 'Failed to sign in with Google');
      }
    } catch (error: any) {
      // If it's already an Error with a message, use it; otherwise format it
      const errorMessage = error.message || error.msg || JSON.stringify(error);
      console.error('Error signing in with Google:', errorMessage);
      // If it's already an Error instance, re-throw it; otherwise create a new Error
      if (error instanceof Error) {
        throw error;
      }
      throw new Error(errorMessage);
    }
  };

  const signInWithEmail = async (email: string, password: string) => {
    if (!supabase) {
      throw new Error('Supabase is not configured. Please set SUPABASE_URL and SUPABASE_ANON_KEY environment variables.');
    }
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      return data;
    } catch (error: any) {
      console.error('Error signing in with email:', error.message);
      throw error;
    }
  };

  const signUpWithEmail = async (email: string, password: string) => {
    if (!supabase) {
      throw new Error('Supabase is not configured. Please set SUPABASE_URL and SUPABASE_ANON_KEY environment variables.');
    }
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;
      return data;
    } catch (error: any) {
      console.error('Error signing up with email:', error.message);
      throw error;
    }
  };

  const signOut = async () => {
    if (!supabase) {
      throw new Error('Supabase is not configured. Please set SUPABASE_URL and SUPABASE_ANON_KEY environment variables.');
    }
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error: any) {
      console.error('Error signing out:', error.message);
      throw error;
    }
  };

  const value = {
    session,
    loading,
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};