'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Layout } from '@/shared/ui/components/layout/layout';
import { ArrowTopRightCircle } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './achive.module.scss';

export function Achive() {
  return (
    <Layout className={st.layout}>
      <Title level={3} weight={500} uppercase>
        Want to Achieve the Same Success?
      </Title>
      <Image
        src="/cases/achive.png"
        alt="custom-solution-img"
        width={1200}
        height={400}
        layout="responsive"
      />
      <section className={st.requestLayout}>
        <Text color="lightBlue">
          We have the knowledge, expertise, and proven strategies to turn bold
          ideas into thriving businesses. With structured planning,
          market-tested execution, and data-driven marketing, your project can
          be the next big success story.
        </Text>
        <Link href="/contact">
          <Button variant="black">
            Contact Us <ArrowTopRightCircle color="black" />
          </Button>
        </Link>
      </section>
    </Layout>
  );
}
