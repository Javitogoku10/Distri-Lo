
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Envíos Puerta a Puerta',
      description: 'Retiro y entrega directa. Gestión total de la carga con trazabilidad y seguridad.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: 'Fletes Estratégicos',
      description: 'Unidades de alto rendimiento para cargas pesadas o mercadería delicada.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
    },
    {
      title: 'Mudanzas Nacionales',
      description: 'Desmontaje y traslado a cualquier punto del país con equipo de maniobra profesional.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: 'Carga Especializada',
      description: 'Manipulación técnica de bultos industriales y pesados con herramientas de sujeción.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      ),
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-[#fefae0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 border-l-8 border-[#bc6c25] pl-6">
          <h2 className="text-4xl md:text-5xl font-black text-[#283618] uppercase tracking-tighter">NUESTRA FUERZA</h2>
          <p className="text-[#606c38] mt-2 font-black uppercase tracking-widest text-xs">Métrica Logística Distri-Lo</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="p-10 bg-[#283618] border-b-4 border-[#bc6c25] hover:bg-[#2c3e1b] transition-all group">
              <div className="text-[#bc6c25] mb-8 scale-125 origin-left">{service.icon}</div>
              <h3 className="text-xl font-black text-[#fefae0] mb-4 uppercase leading-none">{service.title}</h3>
              <p className="text-[#dda15e] text-sm font-bold leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-[#283618] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between border-[10px] border-[#606c38] shadow-2xl">
          <div className="md:w-2/3 mb-10 md:mb-0">
            <h3 className="text-3xl font-black text-[#fefae0] mb-4 uppercase">¿LISTO PARA INICIAR EL TRASLADO?</h3>
            <p className="text-[#dda15e] font-bold text-lg">
              Nicolás Langoni está disponible para coordinar su unidad ahora mismo.
            </p>
          </div>
          <a
            href="#contacto"
            className="bg-[#bc6c25] text-[#fefae0] px-12 py-6 font-black uppercase tracking-[0.2em] text-sm hover:bg-[#fefae0] hover:text-[#283618] transition-all shadow-xl"
          >
            CONTACTO DIRECTO
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
