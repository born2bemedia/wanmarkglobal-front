'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { HeroBanner } from '@/shared/ui/components/hero-banner';
import { ArrowTopRightCircle } from '@/shared/ui/icons';

import st from './hero.module.scss';

export function Hero() {
  const t = useTranslations('faq.hero');

  return (
    <HeroBanner
      image={
        <Image
          className={st.metallicSphere}
          src="/metallic-sphere-faq.webp"
          alt="metallic-white"
          width={453}
          height={449}
        />
      }
      color="#FFD6BD"
      title={{
        color: 'umberPeach',
        value: t('title', { fallback: 'Answers to Your Questions' }),
        width: '640px',
      }}
      contactText={{
        color: 'opacityUmberPeach',
        value: t('text', {
          fallback:
            'Clear, specific details about our services, process, and how we help turn ideas into businesses.',
        }),
        width: '640px',
      }}
      scrollToExplore={{
        color: 'umber',
        value: t('scroll', { fallback: 'Scroll to explore' }),
      }}
      contactUsIcon={<ArrowTopRightCircle color="umber" />}
    />
  );
}
