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

import st from './marketing-request-form.module.scss';

const services = [
  {
    name: 'Personal Brand Development',
    icon: <FiveDots color="#C1D5FF" width="18" height="18" />,
  },
  {
    name: 'Market Positioning Strategy',
    icon: <DecorElement color="#FFC1F9" width="18" height="18" />,
  },
  {
    name: 'Website & Landing Page Strategy',
    icon: <Lightning color="#C1D5FF" width="18" height="18" />,
  },
  {
    name: 'SEO Foundation & Optimization',
    icon: <Clever color="#FFC1F9" width="18" height="18" />,
  },
  {
    name: 'Social Media Strategy & Platform Selection',
    icon: <Circle color="#C1D5FF" width="18" height="18" />,
  },
  {
    name: 'Growth & Community Building',
    icon: <Leaf color="#FFC1F9" width="18" height="18" />,
  },
  {
    name: 'Google & Social Media Ads Strategy',
    icon: <RhodeIsland color="#C1D5FF" width="18" height="18" />,
  },
  {
    name: 'Targeting & Audience Segmentation',
    icon: <Worm color="#FFC1C2" width="18" height="18" />,
  },
  {
    name: 'Lead Generation Strategy',
    icon: <Star color="#A2C0FF" width="18" height="18" />,
  },
  {
    name: 'Email Marketing & CRM Implementation',
    icon: <Clever color="#FFC1F9" width="18" height="18" />,
  },
  {
    name: 'Brand Messaging & Differentiation',
    icon: <Magnet color="#AD9FFF" width="18" height="18" />,
  },
  {
    name: 'Competitor & Audience Analysis',
    icon: <Butterfly color="#FFC1C2" width="18" height="18" />,
  },
  {
    name: 'High-Impact Copywriting & Messaging',
    icon: <Hourglass color="#AD9FFF" width="18" height="18" />,
  },
  {
    name: 'Lead Capture & Call-to-Action Strategy',
    icon: <Pedestal color="#FFC3A0" width="18" height="18" />,
  },
  {
    name: 'Content Planning & Engagement Strategy',
    icon: <Diamond color="#AD9FFF" width="18" height="18" />,
  },
  {
    name: 'Influencer & Collaboration Opportunities',
    icon: <Home color="#FFC3A0" width="18" height="18" />,
  },
  {
    name: 'Ad Copywriting & Creative Direction',
    icon: <Eye color="#FFC1F9" width="18" height="18" />,
  },
  {
    name: 'Campaign Setup & Performance Analysis',
    icon: <Butterfly color="#FFC3A0" width="18" height="18" />,
  },
  {
    name: 'Sales Funnel & Automation Setup',
    icon: <Magnet color="#AD9FFF" width="18" height="18" />,
  },
  {
    name: 'Customer Retention & Loyalty Systems',
    icon: <Pedestal color="#FFC3A0" width="18" height="18" />,
  },
];

export function MarketingRequestForm() {
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
            src="/metallic-thorn.svg"
            alt="metallic"
            width={692}
            height={692}
          />
        </motion.div>
      </section>
      <OrderForm type="Business Consulting" services={services} />
    </section>
  );
}
