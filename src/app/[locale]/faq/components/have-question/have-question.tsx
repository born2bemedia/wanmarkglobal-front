'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Layout } from '@/shared/ui/components/layout/layout';
import { ArrowTopRightCircle } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './have-question.module.scss';

export function HaveQuestion() {
  const t = useTranslations('faq.haveQuestion');

  return (
    <Layout className={st.layout}>
      <Title level={3} weight={500} uppercase>
        {t('title', { fallback: 'Still Have Questions?' })}
      </Title>
      <Image
        src="/faq/have-question.png"
        alt="custom-solution-img"
        width={1200}
        height={400}
        layout="responsive"
      />
      <section className={st.requestLayout}>
        <Text color="lightBlue">
          {t('text', {
            fallback:
              "If you don't see your question here, feel free to contact our team for assistance.",
          })}
        </Text>
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
