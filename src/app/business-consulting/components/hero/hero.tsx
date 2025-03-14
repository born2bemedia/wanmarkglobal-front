'use client';

import Image from 'next/image';

import { HeroBanner } from '@/shared/ui/components/hero-banner';
import { ArrowTopRightCircle } from '@/shared/ui/icons';

import st from './hero.module.scss';

export function Hero() {
  return (
    <HeroBanner
      scrollToExplore={{ color: 'mediumBlue', value: 'Scroll to explore' }}
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
      title={{ color: 'mediumBlue', value: 'Business Consulting' }}
      contactText={{
        color: 'lightBlue',
        value: 'Start, Structure, and Grow Your Business',
      }}
      contactUsIcon={<ArrowTopRightCircle />}
    />
  );
}
