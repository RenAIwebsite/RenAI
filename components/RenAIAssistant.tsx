
import React, { useState } from 'react';
import { MessageSquare, Send, X, Bot } from 'lucide-react';
import { getAssistantResponse } from '../services/geminiService';

const RenAIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'assistant', content: "您好！我是 RenAI 助手。今天我能如何帮您提升房产运营效率？" }]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    const response = await getAssistantResponse(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="w-[350px] h-[550px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden">
          <div className="gradient-bg p-6 text-white flex justify-between items-center">
            <div className="flex items-center space-x-3"><Bot /><span>RenAI Assistant</span></div>
            <button onClick={() => setIsOpen(false)}><X /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-4 rounded-2xl text-sm ${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-white border'}`}>{m.content}</div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t flex space-x-2">
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSend()} className="flex-1 bg-slate-100 rounded-xl px-4 text-sm" placeholder="输入问题..." />
            <button onClick={handleSend} className="bg-blue-600 text-white p-2 rounded-xl"><Send /></button>
          </div>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="gradient-bg text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center">
          <MessageSquare />
        </button>
      )}
    </div>
  );
};

export default RenAIAssistant;
