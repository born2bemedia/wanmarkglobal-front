'use client';

import { ProductList } from '@/features/product/components';
import type { Product } from '@/features/product/lib';

import { Direction, Eye, Pill, RhodeIsland, Worm } from '@/shared/ui/icons';

const products: Product[] = [
  {
    icon: <RhodeIsland />,
    color: '#C1D5FF',
    title: 'Revenue Growth Planning',
    desc: 'identify profitable expansion strategies.',
    cost: '1270.00',
  },
  {
    icon: <Eye />,
    color: '#FFC1F9',
    title: 'New Market & Service Expansion',
    desc: 'Assess when and how to enter new markets.',
    cost: '1390.00',
  },
  {
    icon: <Direction />,
    color: '#FFDE7D',
    title: '"Growth & Scale Blueprint" Package',
    desc: 'A full strategy to prepare your business for expansion and long-term success.',
    cost: '5600.00',
  },
  {
    icon: <Pill />,
    color: '#AD9FFF',
    title: 'Advanced Business Automation',
    desc: 'Scale without increasing manual workload.',
    cost: '1600.00',
  },
  {
    icon: <Worm />,
    color: '#FFA0A2',
    title: 'Competitive Analysis & Market Positioning',
    desc: 'Stay ahead of industry trends.',
    cost: '1600.00',
  },
];

export function ScalingBusinessGrowth() {
  return (
    <ProductList
      products={products}
      title="Scaling & Business Growth"
      desc="Expand your business strategically, automate processes, and increase revenue."
    />
  );
}
