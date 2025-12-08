import React from 'react';
import ChatbotUI from '@site/src/components/ChatbotUI';

export default function Root({children}) {
  return (
    <>
      {children}
      <ChatbotUI />
    </>
  );
}