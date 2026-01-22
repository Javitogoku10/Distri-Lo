
import React, { useState, useEffect } from 'react';

interface ScheduledMission {
  id: string;
  date: string; // ISO format YYYY-MM-DD
  origin: string;
  destination: string;
  type: 'Flete' | 'Mudanza';
  status: 'Confirmado' | 'Espacio Disponible' | 'Solicitado';
}

const MissionCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [missions, setMissions] = useState<ScheduledMission[]>([]);

  // Cargar misiones iniciales y las guardadas localmente
  useEffect(() => {
    const defaultMissions: ScheduledMission[] = [
      { id: '1', date: '2025-05-15', origin: 'CABA', destination: 'Tandil', type: 'Flete', status: 'Espacio Disponible' },
      { id: '2', date: '2025-05-18', origin: 'Córdoba', destination: 'Rosario', type: 'Mudanza', status: 'Confirmado' },
      { id: '3', date: '2025-05-22', origin: 'Mendoza', destination: 'CABA', type: 'Flete', status: 'Espacio Disponible' },
    ];
    
    const saved = localStorage.getItem('distri_lo_calendar_requests');
    if (saved) {
      setMissions([...defaultMissions, ...JSON.parse(saved)]);
    } else {
      setMissions(defaultMissions);
    }
  }, []);

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const handleDayClick = (day: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    setSelectedDate(dateStr);
  };

  const getMissionsForDate = (dateStr: string) => missions.filter(m => m.date === dateStr);

  const requestAction = () => {
    if (!selectedDate) return;
    
    const [y, m, d] = selectedDate.split('-');
    const formattedDate = `${d}/${m}/${y}`;
    
    const message = `Hola Nicolás! Vi la web de Distri-Lo y me gustaría solicitar un presupuesto para el día ${formattedDate}. ¿Tienen disponibilidad?`;
    window.open(`https://wa.me/5491173596327?text=${encodeURIComponent(message)}`, '_blank');

    // Simulación de guardado local para el usuario actual
    const newRequest: ScheduledMission = {
      id: Date.now().toString(),
      date: selectedDate,
      origin: 'Pendiente',
      destination: 'Confirmar',
      type: 'Flete',
      status: 'Solicitado'
    };
    
    const updated = [...missions, newRequest];
    setMissions(updated);
    localStorage.setItem('distri_lo_calendar_requests', JSON.stringify(updated.filter(m => m.status === 'Solicitado')));
  };

  const calendarDays = [];
  const totalDays = daysInMonth(year, month);
  const startOffset = firstDayOfMonth(year, month);

  for (let i = 0; i < startOffset; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="h-20 md:h-24 border border-[#283618]/5 bg-[#283618]/5 opacity-20"></div>);
  }

  for (let d = 1; d <= totalDays; d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const dayMissions = getMissionsForDate(dateStr);
    const isSelected = selectedDate === dateStr;
    const hasSpace = dayMissions.some(m => m.status === 'Espacio Disponible');

    calendarDays.push(
      <div 
        key={d} 
        onClick={() => handleDayClick(d)}
        className={`h-20 md:h-24 border-2 p-1 md:p-2 cursor-pointer transition-all relative overflow-hidden group
          ${isSelected ? 'border-[#bc6c25] bg-[#bc6c25]/10 z-10 scale-[1.02] shadow-lg' : 'border-[#283618]/10 bg-white hover:bg-[#dda15e]/10'}`}
      >
        <span className={`font-black text-xs ${isSelected ? 'text-[#bc6c25]' : 'text-[#283618] opacity-40'}`}>{d}</span>
        <div className="mt-1 flex flex-col gap-0.5">
          {dayMissions.map((m, i) => (
            <div 
              key={i} 
              className={`text-[7px] md:text-[8px] font-black p-0.5 uppercase truncate border 
                ${m.status === 'Espacio Disponible' ? 'bg-[#bc6c25] text-[#fefae0] border-[#bc6c25]' : 
                  m.status === 'Solicitado' ? 'bg-[#606c38] text-[#fefae0] border-[#606c38]' : 'bg-[#283618] text-[#dda15e] border-[#283618]'}`}
            >
              {m.origin === 'Pendiente' ? 'SOLICITADO' : `${m.origin} » ${m.destination}`}
            </div>
          ))}
          {hasSpace && !isSelected && (
            <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-[#bc6c25] rounded-full animate-ping"></div>
          )}
        </div>
      </div>
    );
  }

  return (
    <section id="agenda" className="py-24 bg-[#fefae0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 border-l-8 border-[#bc6c25] pl-6">
          <h2 className="text-4xl md:text-5xl font-black text-[#283618] uppercase tracking-tighter">AGENDA OPERATIVA</h2>
          <p className="text-[#606c38] mt-2 font-black uppercase tracking-widest text-xs">Haga clic en un día para solicitar su flete</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendario */}
          <div className="lg:col-span-2 bg-white border-4 border-[#283618] shadow-[15px_15px_0px_#bc6c25] overflow-hidden">
            <div className="bg-[#283618] p-6 flex justify-between items-center text-[#fefae0]">
              <button onClick={prevMonth} className="hover:text-[#bc6c25] transition-colors font-black text-xs md:text-base">« ANTERIOR</button>
              <h3 className="font-black uppercase tracking-widest text-sm md:text-xl">{monthNames[month]} {year}</h3>
              <button onClick={nextMonth} className="hover:text-[#bc6c25] transition-colors font-black text-xs md:text-base">SIGUIENTE »</button>
            </div>
            <div className="grid grid-cols-7 bg-[#283618] border-b-2 border-[#283618]">
              {['DOM', 'LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB'].map(day => (
                <div key={day} className="py-2 text-center text-[9px] md:text-[10px] font-black text-[#dda15e] uppercase">{day}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 border-collapse">
              {calendarDays}
            </div>
          </div>

          {/* Panel Lateral de Acción */}
          <div className="space-y-6">
            <div className="bg-[#283618] p-8 text-[#fefae0] border-l-[12px] border-[#bc6c25] shadow-xl">
              <h4 className="text-2xl font-black uppercase mb-4 leading-none text-[#dda15e]">ESTADO DE <br/> SELECCIÓN</h4>
              
              <div className="min-h-[180px] flex flex-col justify-center">
                {selectedDate ? (
                  <div className="animate-in fade-in slide-in-from-bottom duration-300">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#bc6c25] mb-1">Fecha Elegida:</p>
                    <p className="text-3xl font-black uppercase tracking-tighter mb-6">
                      {selectedDate.split('-')[2]} de {monthNames[parseInt(selectedDate.split('-')[1]) - 1]}
                    </p>
                    
                    {getMissionsForDate(selectedDate).length > 0 ? (
                      <div className="space-y-4">
                        {getMissionsForDate(selectedDate).map((m, i) => (
                          <div key={i} className="bg-[#fefae0]/5 p-3 border border-[#dda15e]/30">
                            <p className="text-[9px] font-black text-[#bc6c25] uppercase mb-1">{m.status}</p>
                            <p className="text-sm font-bold uppercase">{m.origin} » {m.destination}</p>
                          </div>
                        ))}
                        <button 
                          onClick={requestAction}
                          className="w-full bg-[#bc6c25] text-[#fefae0] py-4 font-black uppercase text-xs tracking-widest hover:bg-[#fefae0] hover:text-[#283618] transition-all mt-4"
                        >
                          SOLICITAR INFORMACIÓN
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <p className="text-xs font-bold text-[#dda15e] uppercase tracking-wider mb-6">Esta fecha está libre. Puede solicitarla ahora mismo.</p>
                        <button 
                          onClick={requestAction}
                          className="w-full bg-[#bc6c25] text-[#fefae0] py-4 font-black uppercase text-xs tracking-widest hover:bg-[#fefae0] hover:text-[#283618] transition-all"
                        >
                          SOLICITAR ESTE DÍA
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center opacity-30 py-10">
                    <svg className="w-12 h-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-[10px] uppercase font-black tracking-widest">Toque un día en el calendario para comenzar</p>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-[#606c38]/10 p-6 border-2 border-[#283618]/20">
              <h5 className="text-[#283618] font-black text-[10px] uppercase tracking-widest mb-3">CONSEJO DISTRI-LO</h5>
              <p className="text-[#283618]/70 text-[10px] font-bold leading-relaxed uppercase">
                Si reserva con antelación y hay un viaje programado cerca de su zona, podemos ofrecerle un **costo reducido** por viaje compartido.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionCalendar;
