import { JSX } from 'react';

export type Package = {
  id: string;
  icon?: string;
  description: string;
  title: string;
  price: string;
  color: string;
  services: {
    icon: JSX.Element;
    title: string;
  }[];
};
