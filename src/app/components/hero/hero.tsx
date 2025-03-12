'use client';

import { useRef } from 'react';

import {
  Autoplay,
  Swiper,
  SwiperClass,
  SwiperSlide,
} from '@/shared/lib/slider';

import { HeroPastelPurple } from './hero-pastel-purple';
import { HeroSoftSky } from './hero-soft-sky';
import { HeroPink } from '@/app/components/hero/hero-pink';

export function Hero() {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <Swiper
      loop
      autoplay={{ delay: 10000 }}
      speed={700}
      modules={[Autoplay]}
      allowTouchMove={false}
      style={{ width: '100%', height: '808px', borderRadius: '12px' }}
      onSwiper={swiper => (swiperRef.current = swiper)}
    >
      <SwiperSlide>
        <HeroSoftSky swiperRef={swiperRef} />
      </SwiperSlide>
      <SwiperSlide>
        <HeroPastelPurple swiperRef={swiperRef} />
      </SwiperSlide>
      <SwiperSlide>
        <HeroPink swiperRef={swiperRef} />
      </SwiperSlide>
    </Swiper>
  );
}
