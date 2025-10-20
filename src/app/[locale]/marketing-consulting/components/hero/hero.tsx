'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { HeroBanner } from '@/shared/ui/components/hero-banner';
import { ArrowTopRightCircle } from '@/shared/ui/icons';

import st from './hero.module.scss';

export function Hero() {
  const t = useTranslations('marketingConsulting.hero');

  return (
    <HeroBanner
      scrollToExplore={{
        color: 'mediumBlue',
        value: t('scroll', { fallback: 'Scroll to explore' }),
      }}
      image={
        <Image
          src="/metallic-bomb.webp"
          alt="metallic-sphere"
          className={st.metallicSphere}
          width={512}
          height={512}
        />
      }
      color="#FFD2FB"
      title={{
        color: 'darkPurple',
        value: t('title', { fallback: 'Marketing Consulting' }),
      }}
      contactText={{
        color: 'darkPurple',
        value: t('text', { fallback: 'Get Noticed, Get Clients, Get Results' }),
      }}
      contactUsIcon={<ArrowTopRightCircle color="darkPurple" />}
    />
  );
}
