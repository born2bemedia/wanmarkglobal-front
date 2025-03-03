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

import st from './business-packages.module.scss';

const growthServices = [
  {
    icon: <FiveDots width="18" height="18" color="#A2C0FF" />,
    title: 'Sales Funnel & Automation Setup',
  },
  {
    icon: <Magnet width="18" height="18" color="#A2C0FF" />,
    title: 'Targeted Advertising Strategy (Google & Social Media Ads)',
  },
  {
    icon: <DecorElement width="18" height="18" color="#A2C0FF" />,
    title: 'Content Planning & Engagement Strategy',
  },
  {
    icon: <Butterfly width="18" height="18" color="#A2C0FF" />,
    title: 'Growth & Community Building',
  },
  {
    icon: <Lightning width="18" height="18" color="#A2C0FF" />,
    title: 'Influencer & Collaboration Opportunities',
  },
  {
    icon: <Hourglass width="18" height="18" color="#A2C0FF" />,
    title: 'Email Marketing & CRM Implementation',
  },
  {
    icon: <Clever width="18" height="18" color="#A2C0FF" />,
    title: 'Customer Retention & Loyalty Systems',
  },
  {
    icon: <Pedestal width="18" height="18" color="#A2C0FF" />,
    title: 'Google & Social Media Ads Strategy',
  },
  {
    icon: <Pedestal width="18" height="18" color="#A2C0FF" />,
    title: 'Ad Copywriting & Creative Direction',
  },
  {
    icon: <Lightning width="18" height="18" color="#A2C0FF" />,
    title: 'Campaign Setup & Performance Analysis',
  },
];

const expansionServices = [
  {
    icon: <FiveDots width="18" height="18" color="#FFDE7D" />,
    title: 'Advanced Business Automation',
  },
  {
    icon: <Magnet width="18" height="18" color="#FFDE7D" />,
    title: 'Revenue Growth Planning',
  },
  {
    icon: <DecorElement width="18" height="18" color="#FFDE7D" />,
    title: 'Expansion into New Markets or Service Areas',
  },
  {
    icon: <Butterfly width="18" height="18" color="#FFDE7D" />,
    title: 'High-Level Advertising & Scaling Strategy',
  },
  {
    icon: <Lightning width="18" height="18" color="#FFDE7D" />,
    title: 'Data-Driven Marketing Adjustments',
  },
  {
    icon: <Hourglass width="18" height="18" color="#FFDE7D" />,
    title: 'Competitive Analysis & Market Positioning',
  },
  {
    icon: <Clever width="18" height="18" color="#FFDE7D" />,
    title: 'Lead Generation Strategy',
  },
  {
    icon: <Pedestal width="18" height="18" color="#FFDE7D" />,
    title: 'Sales Funnel & Automation Setup',
  },
  {
    icon: <FiveDots width="18" height="18" color="#FFDE7D" />,
    title: 'Customer Acquisition Strategy',
  },
  {
    icon: <Magnet width="18" height="18" color="#FFDE7D" />,
    title: 'Workflow Optimization',
  },
  {
    icon: <DecorElement width="18" height="18" color="#FFDE7D" />,
    title: 'Automation & Digital Tools Setup',
  },
];

export function BusinessPackages() {
  return (
    <section className={st.layout}>
      <PackageCard
        title="Business Growth"
        description="Expand visibility, attract customers, and optimize conversions."
        price="9,500"
        services={growthServices}
        color="grey"
      />
      <PackageCard
        title="Business Expansion Package"
        description="Scale efficiently, optimize revenue, and reach new markets."
        price="13,500"
        services={expansionServices}
        color="surfaceYellow"
      />
    </section>
  );
}
