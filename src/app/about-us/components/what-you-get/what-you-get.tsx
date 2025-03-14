'use client';

import Image from 'next/image';

import { cn } from '@/shared/lib/styles';
import { FlowSlider } from '@/shared/ui/components/flow-slider';
import { Title } from '@/shared/ui/kit/title';

import st from './what-you-get.module.scss';

const steps = [
  {
    title: '<span>50+</span> hours of research and market analysis',
    desc: 'Every project starts with deep insights into your industry, competitors, and the audience.',
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
    title: '<span>30+</span> hours of structured business development',
    desc: 'We create financial plans, pricing strategies, and step-by-step business models tailored to your goals.',
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
    title: '<span>40+</span> hours of execution and strategy implementation',
    desc: 'From launch to optimization, we guide you through every stage with clear, actionable roadmaps.',
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
  return (
    <section className={st.layout}>
      <section>
        <Title level={4} weight={500} uppercase>
          What You Get with Us
        </Title>
      </section>
      <FlowSlider
        steps={steps.map((item, index) => ({ ...item, index }))}
        notag
      />
    </section>
  );
}
