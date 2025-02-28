'use client';
import { ProductList } from '@/features/product/components';
import type { Product } from '@/features/product/lib';

import {
  Butterfly,
  DecorElement,
  FiveDots,
  Magnet,
  Stairs,
} from '@/shared/ui/icons';

const products: Product[] = [
  {
    icon: <FiveDots width="70" height="70" />,
    color: '#C1D5FF',
    title: 'Personal Brand Development',
    desc: 'Establish credibility and recognition in your niche.',
    cost: '1200.00',
  },
  {
    icon: <DecorElement />,
    color: '#FFC1F9',
    title: 'Market Positioning Strategy',
    desc: 'Find the right market space to compete effectively.',
    cost: '950.00',
  },
  {
    icon: <Stairs width="70" height="70" color="#FFDE7D" />,
    color: '#FFDE7D',
    title: '"Brand Authority Blueprint" Package',
    desc: 'Build a clear, strong, and professional brand identity that stands out and attracts the right customers.',
    cost: '3390.00',
  },
  {
    icon: <Magnet width="70" height="70" />,
    color: '#AD9FFF',
    title: 'Brand Messaging & Differentiation',
    desc: 'Craft a unique value proposition and messaging.',
    cost: '1750.00',
  },
  {
    icon: <Butterfly width="70" height="70" />,
    color: '#FFC1C2',
    title: 'Competitor & Audience Analysis',
    desc: 'Understand what your competitors do and how to position ',
    cost: '1150.00',
  },
];

export function BrandMarketPositioning() {
  return (
    <ProductList
      products={products}
      title="Brand & Market Positioning"
      desc="Define your place in the market and make your brand stand out."
    />
  );
}
