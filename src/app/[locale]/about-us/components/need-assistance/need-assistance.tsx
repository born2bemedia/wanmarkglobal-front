'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Layout } from '@/shared/ui/components/layout/layout';
import { ArrowTopRightCircle } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './need-assistance.module.scss';

export function NeedAssistance() {
  const t = useTranslations('aboutUs.needAssistance');

  return (
    <Layout className={st.layout}>
      <Title level={3} weight={500} uppercase>
        {t('title', { fallback: 'Need Assistance?' })}
      </Title>
      <Image
        src="/about/assistance.png"
        alt="custom-solution-img"
        width={1200}
        height={400}
      />
      <section className={st.requestLayout}>
        <div>
          <Title level={5} weight={500}>
            {t('subtitle', {
              fallback: 'Skyrocket Your Business with Expert Guidance',
            })}
          </Title>
          <Text color="lightBlue">
            {t('text', {
              fallback:
                'Remove all obstacles, avoid costly mistakes, and follow a proven path to success. Let’s build and grow your business together.',
            })}
          </Text>
        </div>
        <Link href="/contact">
          <Button variant="black">
            {t('button', { fallback: 'Contact Us' })}{' '}
            <ArrowTopRightCircle color="black" />
          </Button>
        </Link>
      </section>
    </Layout>
  );
}
