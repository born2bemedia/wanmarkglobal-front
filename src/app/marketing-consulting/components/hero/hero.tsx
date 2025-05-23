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
          src="/metallic-bomb.webp"
          alt="metallic-sphere"
          className={st.metallicSphere}
          width={512}
          height={512}
        />
      }
      color="#FFD2FB"
      title={{ color: 'darkPurple', value: 'Marketing Consulting' }}
      contactText={{
        color: 'darkPurple',
        value: 'Get Noticed, Get Clients, Get Results',
      }}
      contactUsIcon={<ArrowTopRightCircle color="darkPurple" />}
    />
  );
}
