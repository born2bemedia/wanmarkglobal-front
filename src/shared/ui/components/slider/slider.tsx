'use client';

import { ReactNode } from 'react';
import { Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './slider.scss';

export function Slider({ slides }: { slides: ReactNode[] }) {
  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      spaceBetween={30}
      speed={700}
      mousewheel={true}
      modules={[Mousewheel, Pagination]}
      className="mySwiper"
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
}
