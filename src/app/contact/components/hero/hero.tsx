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
          src="/metallic-urchin.svg"
          alt="metallic-white"
          width={453}
          height={449}
        />
      }
      color="#C1D5FF"
      title={{
        color: 'mediumBlue',
        value: 'Let’s Talk About Your Business Success',
        width: '710px',
      }}
      contactText={{
        color: 'lightBlue',
        value:
          'Have questions or need expert guidance? Get in touch with us today.',
        width: '710px',
      }}
      scrollToExplore={{
        color: 'mediumBlue',
        value: 'Scroll to explore',
      }}
      contactUsIcon={<ArrowTopRightCircle color="blue" />}
    />
  );
}
