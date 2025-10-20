'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { FlowSlider } from '@/shared/ui/components/flow-slider';
import { Layout } from '@/shared/ui/components/layout';

import st from './overview.module.scss';

const getSteps = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('0.title', { fallback: 'Order Review & Custom Team Assembly' }),
    desc: t('0.desc', {
      fallback:
        'Once you place an order, we review your request and invoice you. If needed, we’ll contact you to clarify details and ensure we fully understand your goals. At this stage, we explore your needs and assemble a team of experts best suited to deliver your required services.',
    }),
    bgColor: 'transparent',
    img: (
      <Image
        className={st.img}
        src="/how-we-work/step-1.svg"
        layout="responsive"
        alt="step-1"
        width={468}
        height={300}
      />
    ),
  },
  {
    title: t('1.title', { fallback: 'Secure Payment Account Access' }),
    desc: t('1.desc', {
      fallback:
        'After receiving your payment, we will send you a confirmation email with your account credentials. Your dedicated team will then begin working on your project, ensuring each step aligns with your business objectives.',
    }),
    bgColor: '#FFA0A2',
    img: (
      <Image
        className={st.metallicOne}
        src="/metallic-milky-way.webp"
        alt="metallic"
        width={360}
        height={356}
      />
    ),
  },
  {
    title: t('2.title', {
      fallback: 'Collaborative Execution & Strategy Sessions',
    }),
    desc: t('2.desc', {
      fallback:
        'Throughout the process, we maintain direct communication with you. We schedule strategy sessions to refine ideas, adjust plans, and ensure we meet your expectations every step of the way.',
    }),
    bgColor: 'transparent',
    img: (
      <Image
        className={st.img}
        src="/how-we-work/step-3.svg"
        alt="metallic"
        layout="responsive"
        width={468}
        height={300}
      />
    ),
  },
  {
    title: t('3.title', {
      fallback: 'Full Access to Order Documents & Deliverables',
    }),
    desc: t('3.desc', {
      fallback:
        'Once services are completed, you’ll find all reports, strategies, guides, and other documented deliverables in your account. This ensures you have ongoing access to all materials, even after your order is fulfilled.',
    }),
    bgColor: '#FFA0A2',
    img: (
      <Image
        className={st.metallicTwo}
        src="/metallic-growth.webp"
        alt="metallic"
        width={360}
        height={356}
      />
    ),
  },
];

export function Overview() {
  const t = useTranslations('howWeWork.overview');

  const steps = getSteps(t);

  return (
    <Layout>
      <FlowSlider steps={steps.map((item, index) => ({ ...item, index }))} />
    </Layout>
  );
}
