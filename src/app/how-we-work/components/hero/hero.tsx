'use client';

import Image from 'next/image';

import { HeroBanner } from '@/shared/ui/components/hero-banner';
import { ArrowTopRightCircle } from '@/shared/ui/icons';

import st from './hero.module.scss';

export function Hero() {
  return (
    <HeroBanner
      image={
        <Image
          className={st.metallicSphere}
          src="/metallic-snot.svg"
          alt="metallic-white"
          width={500}
          height={500}
        />
      }
      color="#FFD2D2"
      title={{
        color: 'coral',
        value: 'How we work',
        width: '500px',
      }}
      contactText={{
        color: 'opacityCoral',
        value:
          'A structured approach to consulting—so you always know what’s happening next.',
        width: '590px',
      }}
      scrollToExplore={{
        color: 'coral',
        value: 'Scroll to explore',
      }}
      contactUsIcon={<ArrowTopRightCircle color="coral" />}
    />
  );
}
