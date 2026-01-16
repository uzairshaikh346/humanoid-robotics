import React from 'react';
import { AuthProvider } from '../context/AuthContext';
import AuthWrapper from './AuthWrapper';
import ChatbotUI from '../components/ChatbotUI';

const Root: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AuthProvider>
      <AuthWrapper>
        {children}
        <ChatbotUI />
      </AuthWrapper>
    </AuthProvider>
  );
};

export default Root;