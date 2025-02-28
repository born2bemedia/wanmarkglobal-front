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
    title: 'Website & Landing Page Strategy',
    desc: 'Plan a structure that drives conversions.',
    cost: '800.00',
  },
  {
    icon: <Clever />,
    color: '#FFC1F9',
    title: 'SEO Foundation & Optimization',
    desc: 'Optimize for search visibility and organic growth.',
    cost: '820.00',
  },
  {
    icon: <Shield />,
    color: '#FFDE7D',
    title: '"Conversion-Ready Website Plan" Package',
    desc: 'Get a website strategy that attracts, engages, and converts visitors into paying customers',
    cost: '3000.00',
  },
  {
    icon: <Hourglass />,
    color: '#AD9FFF',
    title: 'High-Impact Copywriting & Messaging Strategy',
    desc: 'Craft website content that engages and converts.',
    cost: '700.00',
  },
  {
    icon: <Pedestal />,
    color: '#FFC3A0',
    title: 'Lead Capture & Call-to-Action Strategy',
    desc: 'Design a system that turns visitors into leads',
    cost: '780.00',
  },
];

export function WebsiteStrategy() {
  return (
    <ProductList
      products={products}
      title="Online Presence & Website Strategy"
      desc="Turn your website into a lead-generating machine, not just an online brochure."
    />
  );
}
