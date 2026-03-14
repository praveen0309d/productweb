import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';
import { MessageSquare, X, Send, User, Bot, Loader2 } from 'lucide-react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi! I'm your JPN Cloud Expert. How can I help you today?", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // Auto-scroll to the bottom when new messages are added
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isOpen]);

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput('');
        setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
        setIsLoading(true);

        try {
            const response = await fetch('https://ccpzt46n-5000.inc1.devtunnels.ms/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage }),
            });

            if (response.ok) {
                const data = await response.json();
                setMessages(prev => [...prev, { text: data.reply, sender: 'bot' }]);
            } else {
                setMessages(prev => [...prev, { text: "Sorry, I'm having trouble connecting to the server.", sender: 'bot' }]);
            }
        } catch (error) {
            setMessages(prev => [...prev, { text: "Network error. Please try again later.", sender: 'bot' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Floating Action Button */}
            {!isOpen && (
                <button className="chat-fab pulse-animate" onClick={toggleChat} aria-label="Open Chat">
                    <MessageSquare size={28} />
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="chat-window animate-fade-in-up">
                    {/* Header */}
                    <div className="chat-header">
                        <div className="chat-title">
                            <Bot size={24} />
                            <div>
                                <h4>Cloud Expert AI</h4>
                                <span className="status">Online</span>
                            </div>
                        </div>
                        <button className="close-btn" onClick={toggleChat} aria-label="Close Chat">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="chat-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message-wrapper ${msg.sender === 'user' ? 'user' : 'bot'}`}>
                                <div className={`message-bubble ${msg.sender}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="message-wrapper bot">
                                <div className="message-bubble bot loading">
                                    <Loader2 size={16} className="spin" /> Thinking...
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="chat-input-area">
                        <form onSubmit={handleSubmit} className="chat-form">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type your message..."
                                className="chat-input"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                className="chat-send-btn"
                                disabled={!input.trim() || isLoading}
                                aria-label="Send Message"
                            >
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;
