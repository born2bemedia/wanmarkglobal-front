'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Text } from '@/shared/ui/kit/text';

import st from './order-greeting.module.scss';

export function OrderGreeting() {
  return (
    <section className={st.layout}>
      <section className={st.text}>
        <Text size="xl" weight={500} color="deepBlack">
          Your order has been successfully placed! We’ve sent a confirmation
          email with your invoice and payment instructions to your email.
        </Text>
        <Text color="lightBlue">
          Once we receive your payment, our team will begin processing your
          request. If you have any questions, feel free to contact us at{' '}
          <Link href="mailto:info@wanmarkglobal.com" className={st.link}>
            info@wanmarkglobal.com
          </Link>
          .
        </Text>
      </section>
      <section className={st.elements}>
        <Image
          src="/thank-you/elements-2.svg"
          alt="elements-2"
          width={352}
          height={208}
        />
        <Image
          className={st.elementToHide}
          src="/thank-you/elements-1.svg"
          alt="elements-1"
          width={279}
          height={175}
        />
      </section>
    </section>
  );
}
