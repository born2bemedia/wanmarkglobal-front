'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { HeroBanner } from '@/shared/ui/components/hero-banner';
import { ArrowTopRightCircle } from '@/shared/ui/icons';

import st from './hero.module.scss';

export function Hero() {
  const t = useTranslations('howWeWork.hero');

  return (
    <HeroBanner
      image={
        <Image
          className={st.metallicSphere}
          src="/metallic-snot.webp"
          alt="metallic-white"
          width={500}
          height={500}
        />
      }
      color="#FFD2D2"
      title={{
        color: 'coral',
        value: t('title', { fallback: 'How we work' }),
        width: '500px',
      }}
      contactText={{
        color: 'opacityCoral',
        value: t('text', {
          fallback:
            'A structured approach to consulting—so you always know what’s happening next.',
        }),
        width: '590px',
      }}
      scrollToExplore={{
        color: 'coral',
        value: t('scroll', { fallback: 'Scroll to explore' }),
      }}
      contactUsIcon={<ArrowTopRightCircle color="coral" />}
    />
  );
}
