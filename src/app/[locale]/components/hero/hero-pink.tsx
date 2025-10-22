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

export function HeroPink({
  swiperRef,
}: {
  swiperRef: RefObject<SwiperClass | null>;
}) {
  const t = useTranslations('home.hero.pink');

  const goNext = () => swiperRef.current?.slideNext();
  const goPrev = () => swiperRef.current?.slidePrev();

  return (
    <section className={cn(st.layout, st.pinkBg)}>
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 0, -10, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Image
          src="/home/pink-metallic-two.webp"
          alt="metallic-sphere"
          className={st.pinkMetallicTwo}
          width={581}
          height={581}
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
          src="/home/pink-metallic-one.webp"
          alt="metallic-sphere"
          className={st.pinkMetallicOne}
          width={483}
          height={483}
        />
      </motion.div>
      <section className={st.content}>
        <div className={st.titleLayout}>
          <Title
            weight={500}
            color="darkPurple"
            className={cn(st.title, st.mb0)}
          >
            {t('title', { fallback: 'Idea is Half the Success.' })}
          </Title>
        </div>
        <div className={st.contactUs}>
          <Text weight={300} color="darkPurple" className={st.text}>
            {t('text', {
              fallback:
                'To thrive, you need proven business and marketing execution. Every idea entering the market faces competition and standard market laws.',
            })}
          </Text>
          <ContactUsButton iconColor="blackPurple" textColor="darkPurple" />
        </div>
        <Separator />
        <section className={st.heroFooter}>
          <Text color="darkPurple">
            {t('text2', { fallback: 'Turn Challenges' })}
          </Text>
          <div className={st.nextBlock}>
            <button onClick={goPrev}>
              <Text color="darkPurple">{t('back', { fallback: 'BACK' })}</Text>
            </button>
            <Text color="darkPurple">
              03/<span className={st.opacityText}>03</span>
            </Text>
            <button onClick={goNext}>
              <Text color="darkPurple">{t('next', { fallback: 'NEXT' })}</Text>
            </button>
          </div>
          <Text className={st.scrollText} color="darkPurple">
            {t('scroll', { fallback: 'Scroll to explore' })}
          </Text>
        </section>
        <ContactUsButton
          iconColor="blackPurple"
          textColor="darkPurple"
          mobile
        />
      </section>
    </section>
  );
}
