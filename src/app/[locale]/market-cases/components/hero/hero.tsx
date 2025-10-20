'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { HeroBanner } from '@/shared/ui/components/hero-banner';
import { ArrowTopRightCircle } from '@/shared/ui/icons';

import st from './hero.module.scss';

export function Hero() {
  const t = useTranslations('marketCases.hero');

  return (
    <HeroBanner
      image={
        <Image
          className={st.metallicSphere}
          src="/cases/metallic-white.png"
          alt="metallic-white"
          width={453}
          height={449}
        />
      }
      color="#FAFAFA"
      title={{
        color: 'darkBlue',
        value: t('title', { fallback: 'Market Cases' }),
        width: '640px',
      }}
      contactText={{
        color: 'darkBlue',
        value: t('text', {
          fallback: 'How Strategic Planning Turns Ideas into Success',
        }),
        width: '640px',
      }}
      scrollToExplore={{
        color: 'mediumBlue',
        value: t('scroll', { fallback: 'Scroll to explore' }),
      }}
      contactUsIcon={<ArrowTopRightCircle color="blue" />}
    />
  );
}
