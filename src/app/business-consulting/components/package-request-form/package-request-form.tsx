'use client';

import Image from 'next/image';

import { OrderForm } from '@/features/order-product-form/components';

import { motion } from '@/shared/lib/motion';
import {
  Butterfly,
  Circle,
  Clever,
  DecorElement,
  Diamond,
  Eye,
  FiveDots,
  Home,
  Hourglass,
  Leaf,
  Lightning,
  Magnet,
  Pedestal,
  Pill,
  RhodeIsland,
  Star,
  Worm,
} from '@/shared/ui/icons';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './package-request-form.module.scss';

const services = [
  {
    name: 'Business Idea Validation',
    icon: <FiveDots color="#C1D5FF" width="18" height="18" />,
  },
  {
    name: 'Legal & Registration Guidance',
    icon: <DecorElement color="#FFC1F9" width="18" height="18" />,
  },
  {
    name: 'Pricing Strategy',
    icon: <Star color="#FFC3A0" width="18" height="18" />,
  },
  {
    name: 'Resource & Time Management',
    icon: <Hourglass color="#AD9FFF" width="18" height="18" />,
  },
  {
    name: 'Basic Accounting & Cash Flow Management',
    icon: <Pedestal color="#FFC3A0" width="18" height="18" />,
  },
  {
    name: 'Customer Acquisition Strategy',
    icon: <Diamond color="#AD9FFF" width="18" height="18" />,
  },
  {
    name: 'Client Retention & Loyalty Systems',
    icon: <Home color="#FFC3A0" width="18" height="18" />,
  },
  {
    name: 'Advanced Business Automation',
    icon: <Pill color="#FFC3A0" width="18" height="18" />,
  },
  {
    name: 'Competitive Analysis & Market Positioning',
    icon: <Worm color="#FFC3A0" width="18" height="18" />,
  },
  {
    name: 'Business Model Development',
    icon: <Magnet color="#AD9FFF" width="18" height="18" />,
  },
  {
    name: 'Financial Planning & Budgeting',
    icon: <Butterfly color="#FFC1C2" width="18" height="18" />,
  },
  {
    name: 'Workflow Optimization',
    icon: <Lightning color="#FFC1C2" width="18" height="18" />,
  },
  {
    name: 'Automation & Digital Tools Setup',
    icon: <Clever color="#FFC1F9" width="18" height="18" />,
  },
  {
    name: 'Target Audience Research',
    icon: <Circle color="#C1D5FF" width="18" height="18" />,
  },
  {
    name: 'Sales Offer & Pricing Strategy',
    icon: <Leaf color="#FFC1F9" width="18" height="18" />,
  },
  {
    name: 'Revenue Growth Planning',
    icon: <RhodeIsland color="#C1D5FF" width="18" height="18" />,
  },
  {
    name: 'New Market & Service Expansion',
    icon: <Eye color="#FFC1F9" width="18" height="18" />,
  },
];

export function PackageRequestForm() {
  return (
    <section className={st.layout}>
      <section>
        <Title level={3} weight={500} className={st.title}>
          Package Request Form
        </Title>
        <Text color="lightBlue">
          Request Your Custom Business Consulting Solution
        </Text>
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 0, -10, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Image
            className={st.orderImg}
            src="/metallic-white.png"
            alt="metallic"
            width={595}
            height={595}
          />
        </motion.div>
      </section>
      <OrderForm type="Business Consulting" services={services} />
    </section>
  );
}
