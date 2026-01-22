
import React from 'react';

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface ScheduledMission {
  id: string;
  date: string;
  origin: string;
  destination: string;
  type: 'Flete' | 'Mudanza';
  status: 'Confirmado' | 'Espacio Disponible' | 'Solicitado';
}
