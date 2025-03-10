'use client';

import Image from 'next/image';

import { motion } from '@/shared/lib/motion';
import { Title } from '@/shared/ui/kit/title';

import st from './hero.module.scss';

export function Hero() {
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
          src="/pricing/metallic.svg"
          alt="hero-figure"
          width={431}
          height={431}
        />
      </motion.div>
      <div className={st.text}>
        <Title weight={500} uppercase>
          Your Account
        </Title>
        <Title level={5} color="mediumBlue" weight={500} uppercase>
          Manage Your Services & Documents
        </Title>
      </div>
    </section>
  );
}
