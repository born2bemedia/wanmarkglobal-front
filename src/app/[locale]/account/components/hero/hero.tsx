'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { motion } from '@/shared/lib/motion';
import { Title } from '@/shared/ui/kit/title';

import st from './hero.module.scss';

export function Hero() {
  const t = useTranslations('account.hero');

  return (
    <section className={st.layout}>
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 0, -10, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Image
          className={st.image}
          src="/pricing/metallic.png"
          alt="hero-figure"
          width={431}
          height={431}
        />
      </motion.div>
      <div className={st.text}>
        <Title weight={500} uppercase>
          {t('title', { fallback: 'Your Account' })}
        </Title>
        <Title level={5} color="mediumBlue" weight={500} uppercase>
          {t('text', { fallback: 'Manage Your Services & Documents' })}
        </Title>
      </div>
    </section>
  );
}
