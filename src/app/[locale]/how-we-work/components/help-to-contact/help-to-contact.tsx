'use client';

import { useWindowSize } from 'react-use';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { ContactUsBtn } from '@/shared/ui/components/contact-us-btn';
import { Layout } from '@/shared/ui/components/layout';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './help-to-contact.module.scss';

export function HelpToContact() {
  const t = useTranslations('howWeWork.helpToContact');

  const { width } = useWindowSize();

  return (
    <Layout className={st.layout}>
      <Title
        level={3}
        weight={500}
        color="darkBlue"
        className={st.title}
        uppercase
      >
        {t('title', { fallback: "Have Questions? We're Here to Help" })}
      </Title>
      <section className={st.imgLayout}>
        <Image
          className={st.img}
          src={
            width <= 768
              ? '/how-we-work/banner-mobile.svg'
              : '/how-we-work/banner.svg'
          }
          alt="how-we-work"
          fill
        />
      </section>
      <section className={st.footerLayout}>
        <Text color="lightBlue" className={st.text}>
          {t('text', {
            fallback:
              'Not sure how it works or need more details? Our team is ready to assist you!',
          })}
        </Text>
        <ContactUsBtn />
      </section>
    </Layout>
  );
}
