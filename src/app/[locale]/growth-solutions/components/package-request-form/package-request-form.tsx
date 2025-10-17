'use client';

import Image from 'next/image';

import { OrderNoServicesForm } from '@/features/order-product-form/components';

import { motion } from '@/shared/lib/motion';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './package-request-form.module.scss';

export function PackageRequestForm() {
  return (
    <section className={st.layout}>
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
