'use client';

import { ProductList } from '@/features/product/components';
import type { Product } from '@/features/product/lib';

import {
  Butterfly,
  Direction,
  Eye,
  RhodeIsland,
  Worm,
} from '@/shared/ui/icons';

const products: Product[] = [
  {
    icon: <RhodeIsland />,
    color: '#C1D5FF',
    title: 'Google & Social Media Ads Strategy',
    desc: 'Plan and structure high-ROI campaigns.',
    cost: '1350.00',
  },
  {
    icon: <Eye />,
    color: '#FFC1F9',
    title: 'Ad Copywriting & Creative Direction',
    desc: 'Create compelling ad visuals and messaging.',
    cost: '900.00',
  },
  {
    icon: <Worm />,
    color: '#FFA0A2',
    title: 'Targeting & Audience Segmentation',
    desc: 'Define the right audience for better conversion rates.',
    cost: '800.00',
  },
  {
    icon: <Direction />,
    color: '#FFDE7D',
    title: '"Profitable Ad Formula" Package',
    desc: 'Get a fully optimized, high-performance ad strategy that attracts leads and maximizes ad spend efficiency.',
    cost: '3500.00',
  },
  {
    icon: <Butterfly width="70" height="70" color="#FFC3A0" />,
    color: '#FFC3A0',
    title: 'Campaign Setup & Performance Analysis',
    desc: 'Optimize and scale ads for efficiency.',
    cost: '950.00',
  },
];

export function CustomerAcquisition() {
  return (
    <ProductList
      products={products}
      title="Paid Advertising & Customer Acquisition"
      desc="Launch data-driven ad campaigns that bring in real, paying customers."
    />
  );
}
