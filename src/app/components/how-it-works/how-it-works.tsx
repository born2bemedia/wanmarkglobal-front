'use client';

import Image from 'next/image';

import { cn } from '@/shared/lib/styles';
import { FlowSlider } from '@/shared/ui/components/flow-slider';
import { Title } from '@/shared/ui/kit/title';

import st from './how-it-works.module.scss';

const steps = [
  {
    title: 'Tell Us About Your Idea',
    desc: 'Share your goals, challenges, and vision.',
    bgColor: '#C1D5FF',
    img: (
      <Image
        className={cn(st.stepImg, st.stepOneImg)}
        src="/step-one.png"
        alt="metallic"
        width={360}
        height={356}
      />
    ),
  },
  {
    title: 'Get a Tailored Plan',
    desc: 'We analyze your needs and create a strategy.',
    bgColor: '#D3CBFF',
    img: (
      <Image
        className={cn(st.stepImg, st.stepTwoImg)}
        src="/step-two.png"
        alt="metallic"
        width={351}
        height={351}
      />
    ),
  },
  {
    title: 'Implementation & Execution',
    desc: 'We guide you through the individual strategy.',
    bgColor: '#ffd3fa',
    img: (
      <Image
        className={cn(st.stepImg, st.stepThreeImg)}
        src="/step-three.png"
        alt="metallic"
        width={508}
        height={508}
      />
    ),
  },
  {
    title: 'Optimize & Scale',
    desc: 'Improve results, automate processes, and expand your reach.',
    bgColor: '#ffd3d3',
    img: (
      <Image
        className={cn(st.stepImg, st.stepFourImg)}
        src="/step-four.png"
        alt="metallic"
        width={360}
        height={360}
      />
    ),
  },
];

export function HowItWorks() {
  return (
    <section className={st.layout}>
      <section>
        <Title level={4} weight={500}>
          How It Works?
        </Title>
        <Title level={4} weight={500}>
          Simple & Effective
        </Title>
      </section>
      <FlowSlider steps={steps.map((item, index) => ({ ...item, index }))} />
    </section>
  );
}
