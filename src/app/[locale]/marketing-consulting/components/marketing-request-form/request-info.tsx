'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { motion } from '@/shared/lib/motion';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './marketing-request-form.module.scss';

export function RequestInfo() {
  const t = useTranslations(
    'marketingConsulting.marketingConsultingPackage.requestForm',
  );

  return (
    <section>
      <Title level={3} weight={500} className={st.title}>
        {t('title', { fallback: 'Package Request Form' })}
      </Title>
      <Text color="lightBlue">
        {t('description', {
          fallback: 'Request Your Custom Marketing Consulting Solution',
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
          src="/metallic-thorn.webp"
          alt="metallic"
          width={692}
          height={692}
        />
      </motion.div>
    </section>
  );
}
