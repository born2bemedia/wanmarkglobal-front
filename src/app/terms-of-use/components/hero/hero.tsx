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
          src="/metallic-white.svg"
          alt="metallic-sphere"
          className={st.metallicSphere}
          width={546}
          height={546}
        />
      </motion.div>
      <Title weight={500} className={st.title} color="darkPurple" uppercase>
        Terms of Use
      </Title>
    </section>
  );
}
