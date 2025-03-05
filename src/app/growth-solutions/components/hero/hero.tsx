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
          className={st.metallicSphere}
          src="/metallic-growth.svg"
          alt="metallic-white"
          width={453}
          height={449}
        />
      }
      color="#FFE69E"
      title={{ color: 'blackYellow', value: 'Growth Solutions', width: '100%' }}
      contactText={{
        color: 'opacityBlackYellow',
        value: 'From Idea to a Thriving Business',
      }}
      contactUsIcon={<ArrowTopRightCircle color="blue" />}
    />
  );
}
