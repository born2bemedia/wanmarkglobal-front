'use client';

import { ProductList } from '@/features/product/components';
import type { Product } from '@/features/product/lib';

import { Circle, Diamond, Home, Leaf, Star } from '@/shared/ui/icons';

const products: Product[] = [
  {
    icon: <Circle />,
    color: '#C1D5FF',
    title: 'Social Media Strategy & Platform Selection',
    desc: 'Choose the right platforms and approach.',
    cost: '680.00',
  },
  {
    icon: <Leaf />,
    color: '#FFC1F9',
    title: 'Growth & Community Building',
    desc: 'Increase reach and interaction organically.',
    cost: '790.00',
  },
  {
    icon: <Star />,
    color: '#FFDE7D',
    title: '"Social Growth Accelerator" Package',
    desc: 'Get a full roadmap for growing your social media and content strategy to build credibility and attract clients.',
    cost: '3500.00',
  },
  {
    icon: <Diamond />,
    color: '#AD9FFF',
    title: 'Content Planning & Engagement Strategy',
    desc: 'Create content that connects and drives action.',
    cost: '950.00',
  },
  {
    icon: <Home />,
    color: '#AD9FFF',
    title: 'Influencer & Collaboration Opportunities',
    desc: 'Leverage partnerships for more exposure.',
    cost: '1190.00',
  },
];

export function SocialContentStrategy() {
  return (
    <ProductList
      products={products}
      title="Social Media & Content Strategy"
      desc="Build an online presence that attracts and engages your audience."
    />
  );
}
