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
        scrollToExplore={{ color: 'lightGreen', value: 'Scroll to explore' }}
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
          value: 'Let’s Make It Clear',
          width: `${isMobile ? '100%' : '50%'}`,
        }}
        contactText={{
          color: 'lightGreen',
          value:
            'Learn how we price our business and marketing consulting services and what goes into the cost.',
          width: `${isMobile ? '100%' : '50%'}`,
        }}
        contactUsIcon={<ArrowTopRightCircle color="green" />}
      />
    </div>
  );
}
