'use client';

import { ProductList } from '@/features/product/components';
import { type Product } from '@/features/product/lib';

import {
  Butterfly,
  DecorElement,
  FiveDots,
  Magnet,
  Stairs,
  Star,
} from '@/shared/ui/icons';

const products: Product[] = [
  {
    icon: <FiveDots width="70" height="70" />,
    color: '#C1D5FF',
    title: 'Business Idea Validation',
    desc: 'Ensure your concept has market demand.',
    cost: '1500.00',
  },
  {
    icon: <DecorElement />,
    color: '#FFC1F9',
    title: 'Legal & Registration Guidance',
    desc: 'Understand business types, compliance, and tax basics.',
    cost: '1500.00',
  },
  {
    icon: <Star />,
    color: '#FFC3A0',
    title: 'Pricing Strategy',
    desc: 'Define pricing that balances market expectations and profitability.',
    cost: '1190.00',
  },
  {
    icon: <Magnet width="70" height="70" />,
    color: '#AD9FFF',
    title: 'Business Model Development',
    desc: 'Structure your business for profitability.',
    cost: '1750.00',
  },
  {
    icon: <Butterfly width="70" height="70" />,
    color: '#FFC1C2',
    title: 'Financial Planning & Budgeting',
    desc: 'Set up cash flow management and cost control.',
    cost: '1750.00',
  },
  {
    icon: <Stairs width="70" height="70" color="#FFDE7D" />,
    color: '#FFDE7D',
    title: '"Startup Essentials" Package',
    desc: 'Get everything you need to establish and structure your business legally—compliance, financial planning, and a solid foundation for success.',
    cost: '1190.00',
  },
];

export function BusinessSetup() {
  return (
    <ProductList
      products={products}
      title="Business Setup & Structure"
      desc="Lay the groundwork for a legally sound, financially stable, and well-organized business."
    />
  );
}
