'use client';

import Link from 'next/link';

import { Layout } from '@/shared/ui/components/layout';
import { FiveDots, Magnet } from '@/shared/ui/icons';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './contact-form.module.scss';

export function ContactInfo() {
  return (
    <Layout className={st.layout}>
      <section className={st.text}>
        <Title level={3} weight={500} uppercase>
          Email & Phone
        </Title>
        <Text color="lightBlue">
          Reach out to our team directly for assistance.
        </Text>
      </section>
      <section className={st.cards}>
        <ContactCard name="Phone" value="+447418036208" />
        <ContactCard name="Email" value="info@wanmarkglobal.com" />
      </section>
    </Layout>
  );
}

function ContactCard({ name, value }: { name: string; value: string }) {
  return (
    <article className={st.cardLayout}>
      {name === 'Phone' ? (
        <FiveDots width="31" height="30" />
      ) : (
        <Magnet width="29" height="29" />
      )}
      <div className={st.cardInfo}>
        <Text color="deepBlack" size="xl">
          {name}
        </Text>
        <Link href={name === 'Phone' ? `tel:${value}` : `mailto:${value}`}>
          <Text color="lightBlue">{value}</Text>
        </Link>
      </div>
    </article>
  );
}
