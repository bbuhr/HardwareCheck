import {
  Cpu,
  Database,
  Layers,
  Monitor
} from 'lucide-react';

export const TABS = [
  {
    id: 'ALL',
    label: 'Tudo',
    icon: Layers
  },
  {
    id: 'CPU',
    label: 'Processadores',
    icon: Cpu
  },
  {
    id: 'GPU',
    label: 'Placas de Vídeo',
    icon: Monitor
  },
  {
    id: 'RAM',
    label: 'Memórias',
    icon: Database
  }
];

export const SUB_TABS = [
  'GERAL',
  'MELHOR PREÇO',
  'MAIS RECENTES'
];