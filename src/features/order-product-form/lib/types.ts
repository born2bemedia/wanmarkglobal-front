import { ReactNode } from 'react';

export type Service = {
  id: number;
  price: number;
  icon: ReactNode;
  title: string;
  color: string;
};
