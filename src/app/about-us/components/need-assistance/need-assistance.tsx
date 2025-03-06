'use client';

import Image from 'next/image';

import { Layout } from '@/shared/ui/components/layout/layout';
import { ArrowTopRightCircle } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './need-assistance.module.scss';

export function NeedAssistance() {
  return (
    <Layout className={st.layout}>
      <Title level={3} weight={500} uppercase>
        Need Assistance?
      </Title>
      <Image
        src="/cases/achive.png"
        alt="custom-solution-img"
        width={1200}
        height={400}
      />
      <section className={st.requestLayout}>
        <div>
          <Title level={5} weight={500}>
            Skyrocket Your Business with Expert Guidance
          </Title>
          <Text color="lightBlue">
            Remove all obstacles, avoid costly mistakes, and follow a proven
            path to success. Let’s build and grow your business together.
          </Text>
        </div>
        <Button variant="black">
          Contact Us <ArrowTopRightCircle color="black" />
        </Button>
      </section>
    </Layout>
  );
}
