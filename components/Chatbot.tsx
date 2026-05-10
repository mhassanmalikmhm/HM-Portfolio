import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { generateChatResponse } from '../services/geminiService';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'model',
      text: "Hi! I'm Hassan's AI Assistant. Ask me about his automation skills, experience with Make/Zapier, or how to hire him!",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
        // Prepare history for context
        const history = messages.map(m => ({ role: m.role, text: m.text }));
        
        const responseText = await generateChatResponse(history, userMsg.text);

        const aiMsg: ChatMessage = {
            id: (Date.now() + 1).toString(),
            role: 'model',
            text: responseText,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, aiMsg]);
    } catch (error: any) {
        const errorMsg: ChatMessage = {
            id: (Date.now() + 1).toString(),
            role: 'model',
            text: error.message || "Sorry, something went wrong.",
            timestamp: new Date(),
            isError: true
        };
        setMessages(prev => [...prev, errorMsg]);
    } finally {
        setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 ${
          isOpen ? 'bg-red-500 rotate-90' : 'bg-brand-accent hover:bg-brand-accentHover'
        }`}
      >
        {isOpen ? <X className="text-white w-6 h-6" /> : <MessageSquare className="text-white w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-[500px] bg-brand-light rounded-2xl shadow-2xl border border-white/10 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-brand-dark p-4 border-b border-white/10 flex items-center space-x-3">
            <div className="w-10 h-10 bg-brand-accent/20 rounded-full flex items-center justify-center">
              <Bot className="text-brand-accent w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white">AI Assistant</h3>
              <p className="text-xs text-green-400 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                Online
              </p>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-dark/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user'
                      ? 'bg-brand-accent text-white rounded-br-none'
                      : msg.isError 
                        ? 'bg-red-500/20 border border-red-500 text-red-200 rounded-bl-none'
                        : 'bg-brand-light border border-white/5 text-gray-200 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-brand-light border border-white/5 p-3 rounded-2xl rounded-bl-none">
                  <Loader2 className="w-5 h-5 text-brand-accent animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-brand-dark border-t border-white/10">
            <div className="flex items-center bg-brand-light rounded-xl border border-white/10 px-3 py-2 focus-within:border-brand-accent transition-colors">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about my automation services..."
                className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !inputText.trim()}
                className="p-2 ml-2 rounded-lg text-brand-accent hover:bg-brand-accent/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-2 text-center">
                <p className="text-[10px] text-gray-500">Powered by Google Gemini 2.5 Flash</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;