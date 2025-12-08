// ChatbotUI.js
import React, { useState, useRef, useEffect } from 'react';
import styles from './ChatbotUI.module.css';

export default function ChatbotUI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hello! I can help you with Physical AI and Humanoid Robotics. Ask me anything!', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);

  const suggestedQuestions = [
    'What is ROS 2 and how is it used in Physical AI?',
    'What are the benefits of Digital Twin simulation?',
    'Tell me about the NVIDIA Isaac platform',
    'How do Vision‑Language‑Action systems work in humanoid robotics?',
    'What is the difference between Gazebo and Unity?'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendToAPI = async (question) => {
    setIsLoading(true);
    try {
      const response = await fetch('https://uzairshaikh-agents.hf.space/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: question
        })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();

      const botResponse = {
        text: data.answer || data.response || "Sorry, I couldn't generate an answer.",
        sender: 'bot'
      };
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('API Error:', error);
      const errorResponse = {
        text: "Sorry, something went wrong. Please try again.",
        sender: 'bot'
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = (text = input) => {
    const messageText = text.trim();
    if (!messageText) return;

    const userMessage = { text: messageText, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setShowSuggestions(false);

    sendToAPI(messageText);
  };

  const handleSuggestionClick = (question) => {
    setInput(question);
    handleSend(question);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={styles.floatingButton}
          aria-label="Open chatbot"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`${styles.chatWindow} ${isMinimized ? styles.minimized : ''}`}>
          {/* Header */}
          <div className={styles.chatHeader}>
            <div className={styles.headerContent}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <div>
                <span className={styles.headerTitle}>Physical AI Assistant</span>
              </div>
            </div>
            <div className={styles.headerButtons}>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className={styles.headerButton}
                aria-label="Minimize"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="4 14 10 14 10 20"></polyline>
                  <polyline points="20 10 14 10 14 4"></polyline>
                  <line x1="14" y1="10" x2="21" y2="3"></line>
                  <line x1="3" y1="21" x2="10" y2="14"></line>
                </svg>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className={styles.headerButton}
                aria-label="Close"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>

          {/* Messages Area */}
          {!isMinimized && (
            <>
              <div className={styles.messagesArea}>
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`${styles.messageWrapper} ${msg.sender === 'user' ? styles.userMessage : styles.botMessage}`}
                  >
                    <div className={styles.messageBubble}>
                      <p>{msg.text}</p>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className={`${styles.messageWrapper} ${styles.botMessage}`}>
                    <div className={styles.messageBubble}>
                      <div className={styles.loadingDots}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <span className={styles.loadingText}>Thinking...</span>
                    </div>
                  </div>
                )}

                {/* Suggested Questions */}
                {showSuggestions && messages.length === 1 && (
                  <div className={styles.suggestionsContainer}>
                    <p className={styles.suggestionsLabel}>Suggested Questions:</p>
                    {suggestedQuestions.map((question, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSuggestionClick(question)}
                        className={styles.suggestionButton}
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className={styles.inputArea}>
                <div className={styles.inputWrapper}>
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your question here..."
                    rows="1"
                    disabled={isLoading}
                    className={styles.textarea}
                  />
                  <button
                    onClick={() => handleSend()}
                    disabled={isLoading || !input.trim()}
                    className={styles.sendButton}
                    aria-label="Send message"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </div>
                <p className={styles.inputHint}>Powered by AI • Press Enter to send</p>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
