'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/styles';
import { FlowSlider } from '@/shared/ui/components/flow-slider';
import { Title } from '@/shared/ui/kit/title';

import st from './what-you-get.module.scss';

const getSteps = (t: ReturnType<typeof useTranslations>) => [
  {
    title: `<span>50+</span> ${t('cards.0.title', { fallback: 'hours of research and market analysis' })}`,
    desc: t('cards.0.desc', {
      fallback:
        'Every project starts with deep insights into your industry, competitors, and the audience.',
    }),
    bgColor: '#A2C0FF',
    img: (
      <Image
        className={cn(st.stepImg, st.stepOneImg)}
        src="/about/step-one.png"
        alt="metallic"
        width={350}
        height={350}
      />
    ),
  },
  {
    title: `<span>30+</span> ${t('cards.1.title', { fallback: 'hours of structured business development' })}`,
    desc: t('cards.1.desc', {
      fallback:
        'We create financial plans, pricing strategies, and step-by-step business models tailored to your goals.',
    }),
    bgColor: '#A2C0FF',
    img: (
      <Image
        className={cn(st.stepImg, st.stepTwoImg)}
        src="/about/step-two.png"
        alt="metallic"
        width={330}
        height={350}
      />
    ),
  },
  {
    title: `<span>40+</span> ${t('cards.2.title', { fallback: 'hours of execution and strategy implementation' })}`,
    desc: t('cards.2.desc', {
      fallback:
        'From launch to optimization, we guide you through every stage with clear, actionable roadmaps.',
    }),
    bgColor: '#A2C0FF',
    img: (
      <Image
        className={cn(st.stepImg, st.stepThreeImg)}
        src="/about/step-three.png"
        alt="metallic"
        width={370}
        height={370}
      />
    ),
  },
];

export function WhatYouGet() {
  const t = useTranslations('aboutUs.whatYouGet');

  const steps = getSteps(t);

  return (
    <section className={st.layout}>
      <section>
        <Title level={4} weight={500} uppercase>
          {t('title', { fallback: 'What You Get with Us' })}
        </Title>
      </section>
      <FlowSlider
        steps={steps.map((item, index) => ({ ...item, index }))}
        notag
      />
    </section>
  );
}
