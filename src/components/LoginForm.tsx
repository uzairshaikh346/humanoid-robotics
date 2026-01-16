import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

interface LoginFormProps {
  onLoginSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const { signInWithGoogle, signInWithEmail, signUpWithEmail } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSignUp, setIsSignUp] = useState(false);

  // Handle Google OAuth sign-in
  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setError(null); // Clear any previous errors
      await signInWithGoogle();
      // signInWithGoogle redirects automatically
    } catch (error: any) {
      // Extract error message from different possible formats
      const errorMessage = 
        error.message || 
        error.msg || 
        error.error_description || 
        (typeof error === 'string' ? error : JSON.stringify(error));
      setError(errorMessage);
      setLoading(false);
    }
  };

  // Handle email/password sign-in or sign-up
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isSignUp) {
        // Sign up with email and password
        const data = await signUpWithEmail(email, password);

        // If sign-up is successful and there's no confirmation required, 
        // the user might be automatically signed in
        if (data.session) {
          // User is signed in, redirect to home
          onLoginSuccess();
        } else {
          // If confirmation is required, show a message
          setError('Please check your email for confirmation. You may already be logged in.');
          setLoading(false);
        }
      } else {
        // Sign in with email and password
        const data = await signInWithEmail(email, password);

        if (data.session) {
          // Session is available, trigger redirect
          // The AuthWrapper will detect the session and show content
          // But we also call onLoginSuccess to ensure redirect happens
          onLoginSuccess();
        } else {
          setLoading(false);
          setError('Login failed. Please check your credentials.');
        }
      }
    } catch (error: any) {
      // Extract error message from different possible formats
      const errorMessage = 
        error.message || 
        error.msg || 
        error.error_description || 
        (typeof error === 'string' ? error : JSON.stringify(error));
      setError(errorMessage);
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <style>{`
        .login-container {
          max-width: 450px;
          margin: 0 auto;
          padding: 2.5rem;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
          background-color: var(--ifm-background-surface-color);
          border: 1px solid rgba(59, 130, 246, 0.2);
        }
        
        .login-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .login-header h1 {
          color: var(--ifm-heading-color);
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }
        
        .login-header p {
          color: var(--ifm-color-secondary);
          font-size: 1rem;
        }
        
        .login-form {
          display: flex;
          flex-direction: column;
        }
        
        .form-group {
          margin-bottom: 1.25rem;
        }
        
        label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--ifm-font-color-base);
          font-size: 0.95rem;
        }
        
        input[type="email"],
        input[type="password"] {
          width: 100%;
          padding: 0.875rem;
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 6px;
          font-size: 1rem;
          background-color: var(--ifm-background-color);
          color: var(--ifm-font-color-base);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        
        input[type="email"]:focus,
        input[type="password"]:focus {
          outline: none;
          border-color: var(--ifm-color-primary);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        input[type="email"]::placeholder,
        input[type="password"]::placeholder {
          color: var(--ifm-color-secondary);
        }
        
        .btn {
          padding: 0.875rem 1.5rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 500;
          margin-top: 0.5rem;
          transition: all 0.2s;
        }
        
        .btn-primary {
          background-color: var(--ifm-color-primary);
          color: white;
        }
        
        .btn-primary:hover:not(:disabled) {
          background-color: var(--ifm-color-primary-dark);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }
        
        .btn-google {
          background-color: #4285F4;
          color: white;
        }
        
        .btn-google:hover:not(:disabled) {
          background-color: #357AE8;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(66, 133, 244, 0.3);
        }
        
        .btn-secondary {
          background-color: var(--ifm-background-surface-color);
          color: var(--ifm-font-color-base);
          border: 1px solid rgba(59, 130, 246, 0.3);
        }
        
        .btn-secondary:hover {
          background-color: rgba(59, 130, 246, 0.1);
        }
        
        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none !important;
        }
        
        .error-message {
          color: #FCA5A5;
          margin-top: 0.5rem;
          margin-bottom: 1rem;
          padding: 0.875rem;
          text-align: left;
          background-color: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 6px;
          white-space: pre-line;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        
        .switch-mode {
          text-align: center;
          margin-top: 1.5rem;
          color: var(--ifm-color-secondary);
        }
        
        .switch-mode a {
          color: var(--ifm-color-primary-light);
          cursor: pointer;
          text-decoration: none;
          font-weight: 500;
        }
        
        .switch-mode a:hover {
          color: var(--ifm-color-primary);
          text-decoration: underline;
        }
        
        .divider {
          display: flex;
          align-items: center;
          text-align: center;
          margin: 1.5rem 0;
        }
        
        .divider::before,
        .divider::after {
          content: '';
          flex: 1;
          border-bottom: 1px solid rgba(59, 130, 246, 0.2);
        }
        
        .divider span {
          padding: 0 1rem;
          color: var(--ifm-color-secondary);
          font-size: 0.9rem;
        }
      `}</style>

      <div className="login-header">
        <h1>Welcome to Humanoid Robotics & Physical AI Book</h1>
        <p>Please sign in to access the content</p>
      </div>

      {/* Error message display - show above buttons if error exists */}
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {/* Google Sign-In Button */}
      <button 
        className="btn btn-google" 
        onClick={handleGoogleSignIn} 
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Sign in with Google'}
      </button>

      <div className="divider">
        <span>or</span>
      </div>

      {/* Email/Password Form */}
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <button 
          type="submit" 
          className="btn btn-primary" 
          disabled={loading}
        >
          {loading ? 'Processing...' : isSignUp ? 'Sign Up' : 'Sign In'}
        </button>
      </form>

      <div className="switch-mode">
        <p>
          {isSignUp 
            ? "Already have an account? " 
            : "Don't have an account? "}
          <a onClick={() => {
            setIsSignUp(!isSignUp);
            setError(null); // Clear error when switching modes
          }}>
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;