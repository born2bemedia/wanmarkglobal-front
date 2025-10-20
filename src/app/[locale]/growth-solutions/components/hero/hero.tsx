'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { HeroBanner } from '@/shared/ui/components/hero-banner';
import { ArrowTopRightCircle } from '@/shared/ui/icons';

import st from './hero.module.scss';

export function Hero() {
  const t = useTranslations('growthSolutions.hero');

  return (
    <HeroBanner
      scrollToExplore={{
        color: 'mediumBlue',
        value: t('scroll', { fallback: 'Scroll to explore' }),
      }}
      image={
        <Image
          className={st.metallicSphere}
          src="/metallic-growth.webp"
          alt="metallic-white"
          width={453}
          height={449}
        />
      }
      color="#FFE69E"
      title={{
        color: 'blackYellow',
        value: t('title', { fallback: 'Growth Solutions' }),
        width: '100%',
      }}
      contactText={{
        color: 'opacityBlackYellow',
        value: t('text', { fallback: 'From Idea to a Thriving Business' }),
      }}
      contactUsIcon={<ArrowTopRightCircle color="blue" />}
    />
  );
}
