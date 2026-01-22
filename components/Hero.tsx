
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-[#fefae0] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#283618 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <h2 className="text-[#bc6c25] font-black uppercase tracking-[0.3em] text-xs mb-4 border-l-4 border-[#bc6c25] pl-4">Logística Nacional & Mudanzas</h2>
          <h1 className="text-5xl md:text-8xl font-black text-[#283618] leading-[0.9] uppercase tracking-tighter mb-8">
            MOVEMOS <br/> <span className="text-[#bc6c25]">LO QUE</span> <br/> IMPORTA.
          </h1>
          <p className="text-xl text-[#606c38] font-bold mb-10 max-w-lg leading-tight uppercase">
            Gestión de carga profesional bajo la firma Distri-Lo. Nicolás Langoni garantiza seguridad en cada km.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/5491173596327" className="bg-[#bc6c25] text-white px-10 py-5 font-black uppercase tracking-widest hover:bg-[#283618] transition-all shadow-xl">Presupuesto Ya</a>
            <a href="#presupuesto" className="border-4 border-[#283618] px-10 py-5 font-black uppercase tracking-widest hover:bg-[#283618] hover:text-white transition-all">Simulador</a>
          </div>
        </div>
        
        <div className="relative">
          <div className="border-[15px] border-[#283618] shadow-[30px_30px_0px_#bc6c25] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800" 
              alt="Camión Distri-Lo" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-[#283618] text-[#fefae0] p-6 font-black uppercase tracking-tighter">
            <p className="text-3xl">100%</p>
            <p className="text-[10px] tracking-widest opacity-60">Seguro Nacional</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
