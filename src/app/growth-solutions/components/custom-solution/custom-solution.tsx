'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Layout } from '@/shared/ui/components/layout/layout';
import { ArrowTopRightCircle } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './custom-solution.module.scss';

export function CustomSolution() {
  return (
    <Layout className={st.layout}>
      <Title level={3} weight={500} uppercase>
        Need a Custom Solution?
      </Title>
      <Image
        src="/custom-solution.webp"
        alt="custom-solution-img"
        width={1200}
        height={400}
        layout="responsive"
      />
      <section className={st.requestLayout}>
        <Text color="lightBlue">
          Build your own package and get a tailored plan at a lower price.
        </Text>
        <Link href="#order-form">
          <Button variant="black">
            Request <ArrowTopRightCircle color="black" />
          </Button>
        </Link>
      </section>
    </Layout>
  );
}
