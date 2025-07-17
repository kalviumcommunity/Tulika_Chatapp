import React, { useState, useRef, useEffect } from 'react';
import ChatHeader from '../components/ChatHeader';
import ChatBox from '../components/ChatBox';
import ChatInput from '../components/ChatInput';
import './PageStyles.css'; // optional shared page styles

function Chat() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' }
  ]);
  
  const chatEndRef = useRef(null);

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: 'user', text }];
    setMessages(newMessages);

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: 'user', text },
        { sender: 'bot', text: `You said: ${text}` }
      ]);
    }, 500);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-page">
      <div className="chat-wrapper">
        <ChatHeader />
        <ChatBox messages={messages} chatEndRef={chatEndRef} />
        <ChatInput onSend={handleSendMessage} />
      </div>
    </div>
  );
}

export default Chat;
