import { JSX } from 'react';

export type Package = {
  description: string;
  title: string;
  price: string;
  color: string;
  services: {
    icon: JSX.Element;
    title: string;
  }[];
};
