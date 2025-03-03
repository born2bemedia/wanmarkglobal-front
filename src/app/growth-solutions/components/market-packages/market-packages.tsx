'use client';

import { PackageCard } from '@/features/package/components';

import {
  Butterfly,
  Clever,
  DecorElement,
  FiveDots,
  Hourglass,
  Lightning,
  Magnet,
  Pedestal,
} from '@/shared/ui/icons';

import st from './market-packages.module.scss';

const businessServices = [
  {
    icon: <FiveDots width="18" height="18" color="#FFD353" />,
    title: 'Business Idea Validation',
  },
  {
    icon: <Magnet width="18" height="18" color="#FFD353" />,
    title: 'Business Model Development',
  },
  {
    icon: <DecorElement width="18" height="18" color="#FFD353" />,
    title: 'Pricing Strategy',
  },
  {
    icon: <Butterfly width="18" height="18" color="#FFD353" />,
    title: 'Financial Planning & Budgeting',
  },
  {
    icon: <Lightning width="18" height="18" color="#FFD353" />,
    title: 'Market Positioning Strategy',
  },
  {
    icon: <Hourglass width="18" height="18" color="#FFD353" />,
    title: 'Competitor & Audience Analysis',
  },
  {
    icon: <Clever width="18" height="18" color="#FFD353" />,
    title: 'Legal & Registration Guidance',
  },
  {
    icon: <Pedestal width="18" height="18" color="#FFD353" />,
    title: 'Target Audience Research',
  },
];

const marketServices = [
  {
    icon: <FiveDots width="18" height="18" color="#A2C0FF" />,
    title: 'Website & Landing Page Strategy',
  },
  {
    icon: <Magnet width="18" height="18" color="#A2C0FF" />,
    title: 'High-Impact Copywriting & Messaging Strategy',
  },
  {
    icon: <DecorElement width="18" height="18" color="#A2C0FF" />,
    title: 'SEO Foundation & Optimization',
  },
  {
    icon: <Butterfly width="18" height="18" color="#A2C0FF" />,
    title: 'Social Media Strategy & Platform Selection',
  },
  {
    icon: <Lightning width="18" height="18" color="#A2C0FF" />,
    title: 'Lead Capture & Call-to-Action Strategy',
  },
  {
    icon: <Hourglass width="18" height="18" color="#A2C0FF" />,
    title: 'Customer Acquisition Strategy',
  },
  {
    icon: <Clever width="18" height="18" color="#A2C0FF" />,
    title: 'Sales Offer & Pricing Strategy',
  },
  {
    icon: <Pedestal width="18" height="18" color="#A2C0FF" />,
    title: 'Brand Messaging & Differentiation',
  },
  {
    icon: <Butterfly width="18" height="18" color="#A2C0FF" />,
    title: 'Personal Brand Development',
  },
];

export function MarketPackages() {
  return (
    <section className={st.layout}>
      <PackageCard
        title="Business Foundation"
        description="Turn your idea into a structured and profitable business."
        price="10,000"
        services={businessServices}
        color="surfaceYellow"
      />
      <PackageCard
        title="Market Entry"
        description="Launch your business, establish online presence, and attract first customers."
        price="10,000"
        services={marketServices}
        color="grey"
      />
    </section>
  );
}
