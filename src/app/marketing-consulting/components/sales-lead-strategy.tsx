'use client';

import { ProductList } from '@/features/product/components';
import type { Product } from '@/features/product/lib';

import { Clever, Magnet, Pedestal, Stairs, Star } from '@/shared/ui/icons';

const products: Product[] = [
  {
    icon: <Star color="#A2C0FF" />,
    color: '#A2C0FF',
    title: 'Lead Generation Strategy',
    desc: 'Design a system that brings in qualified leads.',
    cost: '900.00',
  },
  {
    icon: <Clever width="70" height="70" color="#FFC1F9" />,
    color: '#FFC1F9',
    title: 'Email Marketing & CRM Implementation',
    desc: 'Manage and nurture leads effectively.',
    cost: '690.00',
  },
  {
    icon: <Stairs width="70" height="70" color="#FFDE7D" />,
    color: '#FFDE7D',
    title: '"High-Conversion Sales System" Package',
    desc: 'Implement a structured system for attracting, nurturing, and converting leads into long-term clients.',
    cost: '3000.00',
  },
  {
    icon: <Magnet width="70" height="70" color="#AD9FFF" />,
    color: '#AD9FFF',
    title: 'Sales Funnel & Automation Setup',
    desc: 'Build a seamless journey from first contact to purchase.',
    cost: '830.00',
  },
  {
    icon: <Pedestal width="70" height="70" color="#FFC3A0" />,
    color: '#FFC3A0',
    title: 'Customer Retention & Loyalty Systems',
    desc: 'Create strategies to keep clients engaged and returning.',
    cost: '750.00',
  },
];

export function SalesLeadStrategy() {
  return (
    <ProductList
      products={products}
      title="Sales & Lead Nurturing Strategy"
      desc="Turn leads into loyal clients with the right follow-up and conversion tactics."
    />
  );
}
