'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Layout } from '@/shared/ui/components/layout';
import { FiveDots, Magnet } from '@/shared/ui/icons';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './contact-form.module.scss';

export function ContactInfo() {
  const t = useTranslations('contact.contactInfo');

  return (
    <Layout className={st.layout}>
      <section className={st.text}>
        <Title level={3} weight={500} uppercase>
          {t('title', { fallback: 'Email & Phone' })}
        </Title>
        <Text color="lightBlue">
          {t('text', {
            fallback: 'Reach out to our team directly for assistance.',
          })}
        </Text>
      </section>
      <section className={st.cards}>
        <ContactCard
          name={t('phone', { fallback: 'Phone' })}
          value="+447427816785"
          type="phone"
        />
        <ContactCard
          name={t('email', { fallback: 'Email' })}
          value="info@wanmarkglobal.com"
        />
      </section>
    </Layout>
  );
}

function ContactCard({
  name,
  value,
  type = 'email',
}: {
  name: string;
  value: string;
  type?: 'phone' | 'email';
}) {
  return (
    <article className={st.cardLayout}>
      {type === 'phone' ? (
        <FiveDots width="31" height="30" />
      ) : (
        <Magnet width="29" height="29" />
      )}
      <div className={st.cardInfo}>
        <Text color="deepBlack" size="xl">
          {name}
        </Text>
        <Link href={type === 'phone' ? `tel:${value}` : `mailto:${value}`}>
          <Text color="lightBlue">{value}</Text>
        </Link>
      </div>
    </article>
  );
}
