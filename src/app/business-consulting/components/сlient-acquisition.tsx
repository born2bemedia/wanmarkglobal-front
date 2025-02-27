'use client';

import { ProductList } from '@/features/product/components';
import type { Product } from '@/features/product/lib';

import { Circle, Diamond, Home, Leaf, Star } from '@/shared/ui/icons';

const products: Product[] = [
  {
    icon: <Circle />,
    color: '#C1D5FF',
    title: 'Target Audience Research',
    desc: 'Identify and profile your ideal customers.',
    cost: '1240.00',
  },
  {
    icon: <Leaf />,
    color: '#FFC1F9',
    title: 'Sales Offer & Pricing Strategy',
    desc: 'Develop irresistible, high-converting offers.',
    cost: '1350.00',
  },
  {
    icon: <Star />,
    color: '#FFDE7D',
    title: '"Client Growth System" Package',
    desc: 'All services bundled to help you attract, convert, and retain high-value clients.',
    cost: '5000.00',
  },
  {
    icon: <Diamond />,
    color: '#AD9FFF',
    title: 'Customer Acquisition Strategy',
    desc: 'Create a proven process to bring in new clients.',
    cost: '1100.00',
  },
  {
    icon: <Home />,
    color: '#AD9FFF',
    title: 'Client Retention & Loyalty Systems',
    desc: 'Build long-term relationships for repeat business.',
    cost: '1550.00',
  },
];

export function ClientAcquisition() {
  return (
    <ProductList
      products={products}
      title="Client Acquisition & Sales Strategy"
      desc="Develop a structured approach to attract and convert customers effectively."
    />
  );
}
