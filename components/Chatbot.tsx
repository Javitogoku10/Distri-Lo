
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiChat } from '../services/geminiService';
import { Message } from '../types';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: 'model', text: 'Central Distri-Lo operativa. Soy su asistente de logística. ¿Hacia dónde movemos su carga?' }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatRef = useRef<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { role: 'user' as const, text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      if (!chatRef.current) chatRef.current = getGeminiChat();
      const res = await chatRef.current.sendMessage({ message: input });
      setMessages(prev => [...prev, { role: 'model', text: res.text || 'Sin respuesta.' }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: 'Error de señal. Por favor contacte directamente a Nicolás por WhatsApp.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200]">
      {isOpen ? (
        <div className="bg-[#fefae0] w-[350px] h-[500px] shadow-2xl border-4 border-[#283618] flex flex-col animate-in slide-in-from-bottom-4">
          <div className="bg-[#283618] p-4 text-[#fefae0] flex justify-between items-center">
            <span className="font-black text-xs tracking-widest uppercase">Base Central DL</span>
            <button onClick={() => setIsOpen(false)}>×</button>
          </div>
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 text-xs font-bold uppercase tracking-tighter ${m.role === 'user' ? 'bg-[#bc6c25] text-white' : 'bg-[#283618]/5 border-l-4 border-[#283618]'}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-[#283618]/10 flex gap-2">
            <input value={input} onChange={e => setInput(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSend()} className="flex-1 bg-white border-2 border-[#283618]/20 p-2 text-[10px] font-black uppercase outline-none focus:border-[#bc6c25]" placeholder="Escribir..." />
            <button onClick={handleSend} className="bg-[#283618] text-white px-4 font-black">></button>
          </div>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="w-16 h-16 bg-[#bc6c25] text-white font-black text-xl border-4 border-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">DL</button>
      )}
    </div>
  );
};

export default Chatbot;
