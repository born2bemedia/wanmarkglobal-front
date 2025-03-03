'use client';

import Image from 'next/image';

import { motion } from '@/shared/lib/motion';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './package-request-form.module.scss';

export function PackageInfo() {
  return (
    <section>
      <Title level={3} weight={500} className={st.title}>
        Package Request Form
      </Title>
      <Text color="lightBlue">
        Request Your Custom Business Consulting Solution
      </Text>
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 0, -10, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Image
          className={st.orderImg}
          src="/metallic-white.svg"
          alt="metallic"
          width={595}
          height={595}
        />
      </motion.div>
    </section>
  );
}
