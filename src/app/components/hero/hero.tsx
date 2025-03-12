'use client';

import { Autoplay, Swiper, SwiperSlide } from '@/shared/lib/slider';

import { HeroPastelPurple } from './hero-pastel-purple';
import { HeroSoftSky } from './hero-soft-sky';
import { HeroPink } from '@/app/components/hero/hero-pink';

export function Hero() {
  return (
    <Swiper
      loop
      autoplay={{ delay: 10000 }}
      navigation={false}
      speed={700}
      modules={[Autoplay]}
      allowTouchMove={false}
      style={{ width: '100%', height: '808px', borderRadius: '12px' }}
    >
      <SwiperSlide>
        <HeroSoftSky />
      </SwiperSlide>
      <SwiperSlide>
        <HeroPastelPurple />
      </SwiperSlide>
      <SwiperSlide>
        <HeroPink />
      </SwiperSlide>
    </Swiper>
  );
}
