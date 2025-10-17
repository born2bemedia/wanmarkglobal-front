'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { HeroBanner } from '@/shared/ui/components/hero-banner';
import { ArrowTopRightCircle } from '@/shared/ui/icons';

import st from './hero.module.scss';

export function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div className={st.hero}>
      <HeroBanner
        scrollToExplore={{ color: 'mediumBlue', value: 'Scroll to explore' }}
        image={
          <Image
            src="/about/metallic.png"
            alt="metallic-sphere"
            className={st.metallicSphere}
            width={540}
            height={540}
          />
        }
        color="#C1D5FF"
        title={{
          color: 'mediumBlue',
          value: 'The Experts Behind Your Business Success',
          width: `${isMobile ? '100%' : '50%'}`,
        }}
        contactText={{
          color: 'lightBlue',
          value:
            "We don't guess—we use proven formulas and real market data to build businesses that work.",
          width: `${isMobile ? '100%' : '50%'}`,
        }}
        contactUsIcon={<ArrowTopRightCircle />}
      />
    </div>
  );
}
