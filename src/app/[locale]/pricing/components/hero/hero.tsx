'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { HeroBanner } from '@/shared/ui/components/hero-banner';
import { ArrowTopRightCircle } from '@/shared/ui/icons';

import st from './hero.module.scss';

export function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const t = useTranslations('pricing.hero');

  return (
    <div className={st.hero}>
      <HeroBanner
        scrollToExplore={{
          color: 'lightGreen',
          value: t('scroll', { fallback: 'Scroll to explore' }),
        }}
        image={
          <Image
            src="/pricing/metallic.png"
            alt="metallic-sphere"
            className={st.metallicSphere}
            width={540}
            height={540}
          />
        }
        color="#C1EFBE"
        title={{
          color: 'green',
          value: t('title', { fallback: 'Let’s Make It Clear' }),
          width: `${isMobile ? '100%' : '50%'}`,
        }}
        contactText={{
          color: 'lightGreen',
          value: t('text', {
            fallback:
              'Learn how we price our business and marketing consulting services and what goes into the cost.',
          }),
          width: `${isMobile ? '100%' : '50%'}`,
        }}
        contactUsIcon={<ArrowTopRightCircle color="green" />}
      />
    </div>
  );
}
