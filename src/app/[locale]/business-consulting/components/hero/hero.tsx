'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { HeroBanner } from '@/shared/ui/components/hero-banner';
import { ArrowTopRightCircle } from '@/shared/ui/icons';

import st from './hero.module.scss';

export function Hero() {
  const t = useTranslations('businessConsulting.hero');

  return (
    <HeroBanner
      scrollToExplore={{
        color: 'mediumBlue',
        value: t('scroll', { fallback: 'Scroll to explore' }),
      }}
      image={
        <Image
          src="/metallic-sphere.webp"
          alt="metallic-sphere"
          className={st.metallicSphere}
          width={483}
          height={483}
        />
      }
      color="#D3CBFF"
      title={{
        color: 'mediumBlue',
        value: t('title', { fallback: 'Business Consulting' }),
      }}
      contactText={{
        color: 'lightBlue',
        value: t('text', {
          fallback: 'Start, Structure, and Grow Your Business',
        }),
      }}
      contactUsIcon={<ArrowTopRightCircle />}
    />
  );
}
