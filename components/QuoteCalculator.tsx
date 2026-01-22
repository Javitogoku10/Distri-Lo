
import React, { useState } from 'react';

const QuoteCalculator: React.FC = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ type: '', size: '', from: '', to: '' });

  const next = (key: string, val: string) => {
    setData({ ...data, [key]: val });
    setStep(step + 1);
  };

  const send = () => {
    const msg = `Hola Nicolás! Vengo de la web Distri-Lo.\nOperación: ${data.type}\nCarga: ${data.size}\nRuta: ${data.from} -> ${data.to}\n¿Me pasas presupuesto?`;
    window.open(`https://wa.me/5491173596327?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="presupuesto" className="py-24 bg-[#283618] border-y-[10px] border-[#bc6c25]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-[#fefae0] p-8 md:p-16 shadow-[20px_20px_0px_#bc6c25] border-4 border-[#283618]">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Simulador de Ruta</h2>
            <div className="w-20 h-2 bg-[#bc6c25] mx-auto mt-4"></div>
          </div>

          <div className="min-h-[200px] flex flex-col justify-center">
            {step === 1 && (
              <div className="grid md:grid-cols-2 gap-4">
                {['Flete Express', 'Mudanza', 'Carga Industrial', 'Reparto'].map(t => (
                  <button key={t} onClick={() => next('type', t)} className="p-6 border-4 border-[#283618] font-black uppercase hover:bg-[#bc6c25] hover:text-white transition-all text-left flex justify-between">
                    {t} <span>→</span>
                  </button>
                ))}
              </div>
            )}
            
            {step === 2 && (
              <div className="grid md:grid-cols-2 gap-4">
                {['Pequeña (1-5 bultos)', 'Mediana (Dpto)', 'Grande (Casa)', 'Especial (Maquinaria)'].map(s => (
                  <button key={s} onClick={() => next('size', s)} className="p-6 border-4 border-[#283618] font-black uppercase hover:bg-[#bc6c25] hover:text-white transition-all text-left flex justify-between">
                    {s} <span>→</span>
                  </button>
                ))}
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <input placeholder="ORIGEN (EJ: TANDIL)" className="w-full p-4 border-4 border-[#283618] bg-transparent font-black uppercase" onChange={e => setData({...data, from: e.target.value})} />
                <input placeholder="DESTINO (EJ: CABA)" className="w-full p-4 border-4 border-[#283618] bg-transparent font-black uppercase" onChange={e => setData({...data, to: e.target.value})} />
                <button disabled={!data.from || !data.to} onClick={send} className="w-full bg-[#283618] text-white py-6 font-black uppercase tracking-widest hover:bg-[#bc6c25] disabled:opacity-50 transition-all">
                  Consultar Presupuesto
                </button>
              </div>
            )}
          </div>
          
          {step > 1 && <button onClick={() => setStep(step-1)} className="mt-8 text-xs font-black uppercase text-[#bc6c25] hover:underline">« Volver</button>}
        </div>
      </div>
    </section>
  );
};

export default QuoteCalculator;
