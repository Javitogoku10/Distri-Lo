
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-[#fefae0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#283618] rounded-none overflow-hidden shadow-2xl relative border-[12px] border-[#606c38]">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-16 text-[#fefae0] z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tighter text-shadow-sm">Contacto Directo.</h2>
              <div className="space-y-8">
                {/* Responsable */}
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-[#bc6c25] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-[#fefae0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#dda15e] text-xs font-black uppercase tracking-[0.2em]">Responsable Operativo</p>
                    <p className="text-xl font-black uppercase">Nicolás Langoni</p>
                  </div>
                </div>

                {/* Teléfono / WhatsApp */}
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-[#bc6c25] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-[#fefae0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#dda15e] text-xs font-black uppercase tracking-[0.2em]">Línea de Presupuesto</p>
                    <p className="text-xl font-black uppercase">11 7359-6327</p>
                  </div>
                </div>

                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/distri-lo/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="w-14 h-14 bg-[#bc6c25] flex items-center justify-center shadow-lg group-hover:bg-[#dda15e] transition-all">
                    <svg className="w-7 h-7 text-[#fefae0]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058-1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#dda15e] text-xs font-black uppercase tracking-[0.2em]">Instagram</p>
                    <p className="text-xl font-black uppercase group-hover:text-[#bc6c25] transition-colors">@distri-lo</p>
                  </div>
                </a>

                {/* Nota Aclaratoria */}
                <div className="bg-[#bc6c25]/10 border-l-4 border-[#bc6c25] p-4 my-6">
                  <p className="text-[#dda15e] text-[10px] font-black uppercase tracking-widest mb-1">Nota Operativa:</p>
                  <p className="text-[#fefae0] text-xs font-bold uppercase leading-tight italic">
                    Recuerde coordinar con Nicolás si desea un servicio de carga y descarga para la confección del presupuesto.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="https://wa.me/5491173596327"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 bg-[#bc6c25] text-[#fefae0] px-10 py-5 rounded-none font-black text-lg hover:bg-[#fefae0] hover:text-[#283618] transition-all shadow-xl uppercase tracking-widest w-full justify-center lg:w-auto"
                  >
                    INICIAR GESTIÓN
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <img
                src="https://thelogisticsworld.com/wp-content/uploads/2024/08/rutas-camiones-ia-sector-logistico-cadena-suministro.webp"
                alt="Logística Distri"
                className="absolute inset-0 w-full h-full object-cover grayscale-[60%] sepia-[20%]"
              />
              <div className="absolute inset-0 bg-[#283618]/60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
