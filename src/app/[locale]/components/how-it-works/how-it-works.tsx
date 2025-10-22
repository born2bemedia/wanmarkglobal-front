'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/styles';
import { FlowSlider } from '@/shared/ui/components/flow-slider';
import { Title } from '@/shared/ui/kit/title';

import st from './how-it-works.module.scss';

const getSteps = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('cards.0.title', { fallback: 'Tell Us About Your Idea' }),
    desc: t('cards.0.desc', {
      fallback: 'Share your goals, challenges, and vision.',
    }),
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
    title: t('cards.1.title', { fallback: 'Get a Tailored Plan' }),
    desc: t('cards.1.desc', {
      fallback: 'We analyze your needs and create a strategy.',
    }),
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
    title: t('cards.2.title', { fallback: 'Implementation & Execution' }),
    desc: t('cards.2.desc', {
      fallback: 'We guide you through the individual strategy.',
    }),
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
    title: t('cards.3.title', { fallback: 'Optimize & Scale' }),
    desc: t('cards.3.desc', {
      fallback: 'Improve results, automate processes, and expand your reach.',
    }),
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
  const t = useTranslations('home.howItWorks');

  const steps = getSteps(t);

  return (
    <section className={st.layout}>
      <section>
        <Title level={4} weight={500}>
          {t('title', { fallback: 'How It Works?' })}
        </Title>
        <Title level={4} weight={500}>
          {t('subtitle', { fallback: 'Simple & Effective' })}
        </Title>
      </section>
      <FlowSlider steps={steps.map((item, index) => ({ ...item, index }))} />
    </section>
  );
}
