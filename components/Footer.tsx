
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#283618] text-[#fefae0] py-20 border-t-[10px] border-[#bc6c25]">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#bc6c25] flex items-center justify-center font-black">DL</div>
            <span className="font-black text-xl uppercase tracking-tighter">DISTRI-LO</span>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#dda15e] leading-relaxed">
            Logística estratégica y mudanzas nacionales. <br/>
            Fuerza, puntualidad y confianza.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-black text-xs uppercase tracking-[0.3em] text-[#bc6c25]">Contacto</h4>
          <p className="text-sm font-bold uppercase">WhatsApp: 11 7359-6327</p>
          <p className="text-sm font-bold uppercase">Instagram: @distri-lo</p>
          <p className="text-[10px] opacity-50 uppercase tracking-widest">Atención: Nicolás Langoni</p>
        </div>

        <div className="flex flex-col items-end gap-6">
          <div className="flex items-center gap-4 bg-white/5 p-4 border border-white/10">
            <img src="https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2013/01/04/130104181129_malvinas_304x171.jpg" alt="Malvinas" className="w-12 h-8 object-cover grayscale" />
            <span className="text-[10px] font-black uppercase tracking-widest max-w-[100px]">Operativa Nacional Argentina</span>
          </div>
          <p className="text-[10px] font-black opacity-30 uppercase tracking-[0.4em]">© {new Date().getFullYear()} Distri-Lo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
