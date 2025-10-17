'use client';

import Image from 'next/image';

import { motion } from '@/shared/lib/motion';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './marketing-request-form.module.scss';

export function RequestInfo() {
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
          src="/metallic-thorn.webp"
          alt="metallic"
          width={692}
          height={692}
        />
      </motion.div>
    </section>
  );
}
