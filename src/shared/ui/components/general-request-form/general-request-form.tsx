'use client';

import Image from 'next/image';

import { OrderNoServicesForm } from '@/features/order-product-form/components';

import { motion } from '@/shared/lib/motion';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './general-request-form.module.scss';

export function GeneralRequestForm({
  title = 'Package Request Form',
  description = 'Request Your Custom Business Consulting Solution',
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className={st.layout}>
      <section>
        <Title level={3} weight={500} className={st.title}>
          {title}
        </Title>
        <Text color="lightBlue" className={st.text}>
          {description}
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
            src="/metallic-dentures.svg"
            alt="metallic"
            width={520}
            height={520}
          />
        </motion.div>
      </section>
      <OrderNoServicesForm type="Business Consulting" />
    </section>
  );
}
