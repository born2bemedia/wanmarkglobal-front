'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Layout } from '@/shared/ui/components/layout/layout';
import { ArrowTopRightCircle } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Title } from '@/shared/ui/kit/title';

import st from './cta-section.module.scss';

export function CtaSection({
  image,
  subtitle,
}: {
  image: string;
  subtitle: string;
}) {
  const t = useTranslations('marketCasesSlug');

  return (
    <Layout className={st.layout}>
      <Title level={3} weight={500} uppercase>
        {subtitle}
      </Title>
      <Button variant="black">
        {t('contactUs', { fallback: 'Contact Us' })}{' '}
        <ArrowTopRightCircle color="black" />
      </Button>
      <Image
        src={image}
        alt="custom-solution-img"
        width={1200}
        height={400}
        layout="responsive"
      />
    </Layout>
  );
}
