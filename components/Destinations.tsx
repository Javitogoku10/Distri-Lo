
import React, { useState } from 'react';

const Destinations: React.FC = () => {
  const [activeDest, setActiveDest] = useState<string | null>(null);

  const destinations = [
    { name: 'Gran Buenos Aires', type: 'Hub Central', id: 'gba', coords: { x: 235, y: 395 } },
    { name: 'Córdoba', type: 'Eje Central', id: 'cba', coords: { x: 190, y: 310 } },
    { name: 'Río Gallegos', type: 'Ruta Austral', id: 'rgl', coords: { x: 115, y: 645 } },
    { name: 'Mendoza', type: 'Corredor Andino', id: 'mdz', coords: { x: 125, y: 355 } },
    { name: 'Salta', type: 'Norte Extremo', id: 'sla', coords: { x: 165, y: 130 } },
    { name: 'Jujuy', type: 'Norte Extremo', id: 'jjy', coords: { x: 160, y: 95 } },
    { name: 'La Rioja', type: 'Región Cuyo', id: 'lrj', coords: { x: 150, y: 275 } },
    { name: 'Paraná', type: 'Litoral', id: 'par', coords: { x: 230, y: 325 } },
    { name: 'Tandil', type: 'Pcia. BsAs', id: 'tan', coords: { x: 235, y: 445 } },
  ];

  const TacticalMap = () => (
    <div className="relative w-full flex justify-center py-10 bg-[#1a2310] rounded-[40px] border-4 border-[#606c38]/30 shadow-2xl overflow-hidden">
      {/* Scanline Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="w-full h-[3px] bg-[#bc6c25]/30 absolute animate-[scan_5s_linear_infinite] shadow-[0_0_20px_#bc6c25]"></div>
      </div>
      
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#dda15e 1px, transparent 1px), linear-gradient(90deg, #dda15e 1px, transparent 1px)', backgroundSize: '35px 35px' }}>
      </div>

      <svg
        viewBox="0 0 380 750"
        className="w-full h-auto max-h-[700px] relative z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#dda15e" strokeWidth="0.8" opacity="0.4">
          <path d="M140 80 L210 145 L250 145 L300 170 L320 210 L280 230 L285 330 L310 500 L180 540 L135 765 L60 720 L80 400 L90 400 L100 80 Z" 
                stroke="#bc6c25" strokeWidth="2.5" strokeDasharray="10 5" opacity="1" />
        </g>

        <g stroke="#bc6c25" strokeWidth="1" strokeDasharray="4 4" opacity="0.5">
          {destinations.filter(d => d.id !== 'gba').map(d => (
            <line key={`line-${d.id}`} x1={235} y1={395} x2={d.coords.x} y2={d.coords.y} className={activeDest === d.id ? 'opacity-100 stroke-2' : ''}>
              {activeDest === d.id && <animate attributeName="stroke-dashoffset" from="40" to="0" dur="1s" repeatCount="indefinite" />}
            </line>
          ))}
        </g>

        {destinations.map(d => (
          <g key={`node-${d.id}`} onMouseEnter={() => setActiveDest(d.id)} onMouseLeave={() => setActiveDest(null)} className="cursor-pointer">
            <circle cx={d.coords.x} cy={d.coords.y} r={activeDest === d.id ? "16" : "8"} fill="#bc6c25" opacity="0.2">
              <animate attributeName="r" values="6;16;6" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx={d.coords.x} cy={d.coords.y} r="4.5" fill={activeDest === d.id ? "#fefae0" : "#bc6c25"} />
            {(activeDest === d.id || d.id === 'gba') && (
              <g className="pointer-events-none">
                <rect x={d.coords.x + 12} y={d.coords.y - 12} width="100" height="24" fill="#283618" stroke="#bc6c25" />
                <text x={d.coords.x + 18} y={d.coords.y + 4} fill="#fefae0" fontSize="9" fontWeight="900" className="uppercase tracking-widest">{d.name}</text>
              </g>
            )}
          </g>
        ))}
      </svg>
    </div>
  );

  return (
    <section id="destinos" className="py-24 bg-[#283618]">
      <style>{`
        @keyframes scan { from { top: -10%; } to { top: 110%; } }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-24">
          <div className="lg:w-1/2 mb-16 lg:mb-0">
            <h2 className="text-4xl md:text-5xl font-black text-[#fefae0] mb-6 uppercase tracking-tighter leading-none">
              COBERTURA <br/> <span className="text-[#bc6c25]">NACIONAL.</span>
            </h2>
            <div className="w-24 h-2 bg-[#bc6c25] mb-8"></div>
            <p className="text-[#dda15e] text-lg font-bold mb-10 leading-relaxed max-w-lg">
              Despliegue nacional inmediato. Operamos en las rutas más críticas de Argentina.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
              {destinations.map((dest) => (
                <div key={dest.id} onMouseEnter={() => setActiveDest(dest.id)} onMouseLeave={() => setActiveDest(null)}
                     className={`p-4 border transition-all cursor-crosshair ${activeDest === dest.id ? 'bg-[#bc6c25] border-[#fefae0]' : 'bg-[#606c38]/10 border-[#dda15e]/20'}`}>
                  <h4 className="text-base font-black uppercase text-[#fefae0]">{dest.name}</h4>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-[#dda15e]">{dest.type}</p>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/5491173596327"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-[#fefae0] text-[#283618] px-10 py-5 font-black uppercase tracking-widest hover:bg-[#bc6c25] hover:text-[#fefae0] transition-all shadow-2xl"
            >
              ASEGURAR MI RUTA
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
          <div className="lg:w-1/2">
            <TacticalMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
