
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-[100] bg-[#283618] text-[#fefae0] border-b-4 border-[#bc6c25]">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#bc6c25] flex items-center justify-center font-black text-xl">DL</div>
          <span className="font-black tracking-tighter text-2xl uppercase">DISTRI-LO</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-black text-[10px] tracking-widest uppercase">
          <a href="#servicios" className="hover:text-[#bc6c25] transition-colors">Servicios</a>
          <a href="#presupuesto" className="hover:text-[#bc6c25] transition-colors">Simulador</a>
          <a href="#agenda" className="hover:text-[#bc6c25] transition-colors">Agenda</a>
          <a href="#contacto" className="bg-[#bc6c25] px-6 py-2 hover:bg-[#fefae0] hover:text-[#283618] transition-all">Contacto</a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-[#283618] p-4 flex flex-col gap-4 font-black uppercase text-xs border-t border-[#bc6c25]/30">
          <a href="#servicios" onClick={() => setIsOpen(false)}>Servicios</a>
          <a href="#presupuesto" onClick={() => setIsOpen(false)}>Simulador</a>
          <a href="#agenda" onClick={() => setIsOpen(false)}>Agenda</a>
          <a href="#contacto" onClick={() => setIsOpen(false)} className="text-[#bc6c25]">Contacto Directo</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
