import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';
import { useHomePageUrl } from '../utils/routing';
import { useAuth } from '../context/AuthContext';

const AuthWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { session, loading } = useAuth();
  const history = useHistory();
  const homePageUrl = useHomePageUrl();

  // Handle OAuth callback and redirect after login
  useEffect(() => {
    if (!loading && session) {
      // Check if we're returning from OAuth (Supabase uses hash fragments)
      const hash = window.location.hash;
      const searchParams = new URLSearchParams(window.location.search);
      
      // Supabase OAuth callback typically has hash fragments like #access_token=...
      const hasOAuthCallback = hash.includes('access_token') || 
                               hash.includes('type=recovery') ||
                               searchParams.has('code') ||
                               searchParams.has('error');
      
      if (hasOAuthCallback) {
        // Clean up the URL by removing hash and query params
        const cleanUrl = window.location.pathname;
        window.history.replaceState({}, document.title, cleanUrl);
        // Redirect to home page - /humanoid-robotics/
        setTimeout(() => {
          window.location.href = homePageUrl;
        }, 100);
      }
    }
  }, [session, loading, homePageUrl]);

  // Always show content - authentication is optional
  // Users can access everything, but can login if they want
  return <>{children}</>;
};

export default AuthWrapper;