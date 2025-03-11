'use client';

import Image from 'next/image';

import { motion } from '@/shared/lib/motion';
import { Title } from '@/shared/ui/kit/title';
import { TitleColor } from '@/shared/ui/kit/title/types';

import st from './policy-hero.module.scss';

export function PolicyHero({
  title,
  color,
}: {
  title: { value: string; color: TitleColor };
  color: string;
}) {
  return (
    <section className={st.layout} style={{ backgroundColor: color }}>
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
      <Title weight={500} className={st.title} color={title.color} uppercase>
        {title.value}
      </Title>
    </section>
  );
}
