import { JSX } from 'react';

export type Package = {
  id: number;
  icon?: string;
  description: string;
  title: string;
  price: number;
  color: string;
  services: {
    icon: JSX.Element;
    title: string;
  }[];
};
