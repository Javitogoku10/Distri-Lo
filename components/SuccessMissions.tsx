
import React from 'react';

const SuccessMissions: React.FC = () => {
  const missions = [
    {
      id: '01',
      title: 'Unidad de Distribución 01',
      location: 'Logística de Alto Volumen',
      img: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800', 
      desc: 'Transporte de carga pesada con estibaje profesional bajo la firma Distri-Lo.'
    },
    {
      id: '02',
      title: 'Despliegue de Mudanza',
      location: 'CABA - Interior del País',
      img: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&q=80&w=800',
      desc: 'Traslado integral de mobiliario con protección térmica y sujeción de seguridad.'
    },
    {
      id: '03',
      title: 'Logística de Flete',
      location: 'Zona Industrial GBA',
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
      desc: 'Servicio puerta a puerta para mercaderías críticas y suministros.'
    },
    {
      id: '04',
      title: 'Planificación de Ruta',
      location: 'Briefing Nacional',
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
      desc: 'Análisis de rutas nacionales y despliegue estratégico Distri-Lo.'
    },
  ];

  return (
    <section id="operaciones" className="py-24 bg-[#fefae0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-black text-[#283618] uppercase tracking-tighter leading-none mb-4">
            OPERACIONES.
          </h2>
          <div className="w-40 h-3 bg-[#bc6c25] mx-auto mb-8"></div>
          <p className="text-[#606c38] font-bold text-xl max-w-3xl mx-auto uppercase tracking-tight leading-tight">
            Nuestra flota en acción que certifica la calidad de servicio de Nicolás Langoni.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {missions.map((mission) => (
            <div key={mission.id} className="group relative overflow-hidden bg-[#283618] border-l-[12px] border-[#bc6c25] shadow-2xl">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 aspect-square md:aspect-auto overflow-hidden relative">
                  <img 
                    src={mission.img} 
                    alt={mission.title} 
                    className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:brightness-110 ${mission.id === '04' ? 'sepia-[20%] contrast-110' : 'grayscale-[20%] group-hover:grayscale-0'}`}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800&sig=${mission.id}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-[#283618]/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                </div>
                
                <div className="md:w-1/2 p-8 flex flex-col justify-center bg-[#283618]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-[#bc6c25] text-[#fefae0] text-[10px] font-black px-2 py-1 tracking-widest uppercase">
                      REF: {mission.id}
                    </span>
                  </div>
                  <h4 className="text-[#fefae0] font-black text-2xl uppercase tracking-tighter leading-none mb-2">
                    {mission.title}
                  </h4>
                  <p className="text-[#dda15e] text-xs font-black uppercase tracking-widest mb-6">
                    {mission.location}
                  </p>
                  <p className="text-[#fefae0]/80 text-sm font-bold leading-relaxed mb-6 border-l border-[#606c38] pl-4">
                    {mission.desc}
                  </p>
                  <div className="mt-auto">
                    <div className="w-12 h-1 bg-[#bc6c25]"></div>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 text-[#fefae0]/10 font-black text-4xl select-none pointer-events-none uppercase">
                DL-{mission.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessMissions;
