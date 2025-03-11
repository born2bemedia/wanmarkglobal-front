'use client';

import Image from 'next/image';

import { motion } from '@/shared/lib/motion';
import { Text, TextColor } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';
import { TitleColor } from '@/shared/ui/kit/title/types';

import st from './policy-hero.module.scss';

export function PolicyHero({
  title,
  color,
  hint,
}: {
  title: { value: string; color: TitleColor };
  hint?: { value: string; color: TextColor };
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
      <section className={st.title}>
        {hint ? <Text color={hint.color}>{hint.value}</Text> : null}
        <Title weight={500} color={title.color} uppercase>
          {title.value}
        </Title>
      </section>
    </section>
  );
}
