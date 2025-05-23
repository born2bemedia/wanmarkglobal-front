'use client';

import { RefObject } from 'react';
import Image from 'next/image';

import { motion } from '@/shared/lib/motion';
import { SwiperClass } from '@/shared/lib/slider';
import { cn } from '@/shared/lib/styles';
import { Separator } from '@/shared/ui/kit/separator';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './hero.module.scss';
import { ContactUsButton } from '@/app/components/hero/contact-button';

export function HeroSoftSky({
  swiperRef,
}: {
  swiperRef: RefObject<SwiperClass | null>;
}) {
  const goNext = () => swiperRef.current?.slideNext();

  return (
    <section className={cn(st.layout, st.blueBg)}>
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 0, -10, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Image
          src="/metallic-white.webp"
          alt="metallic-sphere"
          className={st.metallicSphere}
          width={546}
          height={546}
        />
      </motion.div>
      <section className={st.content}>
        <div className={st.titleLayout}>
          <Title weight={500} className={st.title}>
            Turn Challenges into Growth.
          </Title>
          <Title level={5} weight={400}>
            Get Expert Guidance for Your Business & Brand.
          </Title>
        </div>
        <div className={st.contactUs}>
          <Text weight={300} className={st.text}>
            Struggling with strategy, marketing, or scaling? We help
            entrepreneurs, professionals, and small business owners build, grow,
            and optimize their projects with proven solutions.
          </Text>
          <ContactUsButton />
        </div>
        <Separator />
        <section className={st.heroFooter}>
          <Text>Turn Challenges into Growth</Text>
          <div className={st.nextBlock}>
            <Text>
              01/<span className={st.opacityText}>03</span>
            </Text>
            <button onClick={goNext}>
              <Text>NEXT</Text>
            </button>
          </div>
          <Text className={st.scrollText}>Scroll to explore</Text>
        </section>
        <ContactUsButton mobile />
      </section>
    </section>
  );
}
