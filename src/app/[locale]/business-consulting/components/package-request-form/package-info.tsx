'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { motion } from '@/shared/lib/motion';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './package-request-form.module.scss';

export function PackageInfo() {
  const t = useTranslations('businessConsulting.packageInfo');

  return (
    <section>
      <Title level={3} weight={500} className={st.title}>
        {t('title', { fallback: 'Package Request Form' })}
      </Title>
      <Text color="lightBlue">
        {t('text', {
          fallback: 'Request Your Custom Business Consulting Solution',
        })}
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
          src="/metallic-white.webp"
          alt="metallic"
          width={595}
          height={595}
        />
      </motion.div>
    </section>
  );
}
