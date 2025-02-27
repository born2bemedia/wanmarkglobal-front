'use client';

import { ProductList } from '@/features/product/components';
import type { Product } from '@/features/product/lib';

import {
  Clever,
  Hourglass,
  Lightning,
  Pedestal,
  Shield,
} from '@/shared/ui/icons';

const products: Product[] = [
  {
    icon: <Lightning />,
    color: '#C1D5FF',
    title: 'Workflow Optimization',
    desc: 'Design efficient processes to save time and resources.',
    cost: '1590.00',
  },
  {
    icon: <Clever />,
    color: '#FFC1F9',
    title: 'Automation & Digital Tools',
    desc: 'Set up software for invoicing, scheduling, and communication.',
    cost: '1760.00',
  },
  {
    icon: <Shield />,
    color: '#FFDE7D',
    title: '"Efficiency Boost" Package',
    desc: 'A complete setup to optimize operations, automate tasks, and maximize your working hours.',
    cost: '6000.00',
  },
  {
    icon: <Hourglass />,
    color: '#AD9FFF',
    title: 'Resource & Time Management',
    desc: 'Structure work habits and tools for better productivity.',
    cost: '1520.00',
  },
  {
    icon: <Pedestal />,
    color: '#FFC3A0',
    title: 'Basic Accounting & Cash Flow Management',
    desc: 'Organize finances for long-term stability.',
    cost: '1300.00',
  },
];

export function OperationsAndEfficiency() {
  return (
    <ProductList
      products={products}
      title="Operations & Efficiency"
      desc="Eliminate inefficiencies and structure your daily workflow for maximum productivity."
    />
  );
}
