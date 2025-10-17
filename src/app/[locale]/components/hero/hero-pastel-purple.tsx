'use client';

import { RefObject } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { motion } from '@/shared/lib/motion';
import { SwiperClass } from '@/shared/lib/slider';
import { cn } from '@/shared/lib/styles';
import { Separator } from '@/shared/ui/kit/separator';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './hero.module.scss';
import { ContactUsButton } from '@/app/[locale]/components/hero/contact-button';

export function HeroPastelPurple({
  swiperRef,
}: {
  swiperRef: RefObject<SwiperClass | null>;
}) {
  const t = useTranslations('home.hero.pastelPurple');

  const goNext = () => swiperRef.current?.slideNext();
  const goPrev = () => swiperRef.current?.slidePrev();

  return (
    <section className={cn(st.layout, st.purpleBg)}>
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 0, -10, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Image
          src="/home/purple-metallic-two.png"
          alt="metallic-sphere"
          className={st.purpleMetallicTwo}
          width={683}
          height={683}
        />
      </motion.div>
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 0, -10, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Image
          src="/home/purple-metallic-one.webp"
          alt="metallic-sphere"
          className={st.purpleMetallicOne}
          width={446}
          height={440}
        />
      </motion.div>
      <section className={st.content}>
        <div className={st.titleLayout}>
          <Title weight={500} color="blackPurple" className={st.title}>
            {t('title', {
              fallback:
                '100 million new businesses are launched globally each year.',
            })}
          </Title>
          <Title level={5} color="blackPurple" weight={400}>
            {t('subtitle', {
              fallback:
                '90% of startups fail, with 70% not surviving between their second and fifth years.',
            })}
          </Title>
        </div>
        <div className={st.contactUs}>
          <Text weight={300} color="blackPurple" className={st.text}>
            {t('text', {
              fallback:
                '14% of startups fail due to poor marketing strategies.',
            })}
          </Text>
          <ContactUsButton textColor="blackPurple" iconColor="blackPurple" />
        </div>
        <Separator />
        <section className={st.heroFooter}>
          <Text color="blackPurple">
            {t('text2', { fallback: 'Turn Challenges' })}
          </Text>
          <div className={st.nextBlock}>
            <button onClick={goPrev}>
              <Text color="blackPurple">{t('back', { fallback: 'BACK' })}</Text>
            </button>
            <Text color="blackPurple">
              02/<span className={st.opacityText}>03</span>
            </Text>
            <button onClick={goNext}>
              <Text color="blackPurple">{t('next', { fallback: 'NEXT' })}</Text>
            </button>
          </div>
          <Text className={st.scrollText} color="blackPurple">
            {t('scroll', { fallback: 'Scroll to explore' })}
          </Text>
        </section>
        <ContactUsButton
          textColor="blackPurple"
          iconColor="blackPurple"
          mobile
        />
      </section>
    </section>
  );
}
