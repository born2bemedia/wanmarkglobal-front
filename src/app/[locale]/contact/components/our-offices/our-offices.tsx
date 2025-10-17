'use client';

import { ReactNode } from 'react';
import { useTranslations } from 'next-intl';

import { Layout } from '@/shared/ui/components/layout';
import { ArrowDown } from '@/shared/ui/icons';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './our-offices.module.scss';

export function OurOffices() {
  const t = useTranslations('contact.ourOffices');

  return (
    <Layout className={st.layout}>
      <section className={st.text}>
        <Title level={3} weight={500} uppercase>
          {t('title', { fallback: 'Our Offices' })}
        </Title>
        <Text color="lightBlue">
          {t('desc', { fallback: 'Official company registration details.' })}
        </Text>
      </section>
      <section className={st.locations}>
        <Location
          address="2nd Floor College House, 17 King Edwards Road, Ruislip, London, United Kingdom, HA4 7AE"
          desc={t('registeredAddress', { fallback: 'Registered Address' })}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.6616269610504!2d-0.43125702337590144!3d51.5744363718286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605ad49cf9881%3A0xa7310a9f2fde3071!2sMint%20Formations!5e0!3m2!1sen!2sua!4v1741123691956!5m2!1sen!2sua"
            style={{
              border: 'none',
              borderRadius: '12px',
              height: '254px',
              width: '100%',
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Location>
        <Location
          address="Unit 7, 6 Westgate Street, London, E8 3RN, United Kingdom"
          desc={t('officeAddress', { fallback: 'Office Address' })}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.6506926589923!2d-0.060436723378093984!3d51.53796637182015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ce7c570437d%3A0xc84ed0f2b05a7f4!2s7%2C%206%20Westgate%20St%2C%20London%20E8%203RN%2C%20UK!5e0!3m2!1sen!2sua!4v1741124448161!5m2!1sen!2sua"
            style={{
              border: 'none',
              borderRadius: '12px',
              height: '254px',
              width: '100%',
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Location>
      </section>
    </Layout>
  );
}

function Location({
  address,
  desc,
  children,
}: {
  address: string;
  desc: string;
  children: ReactNode;
}) {
  return (
    <section className={st.locationLayout}>
      <section className={st.addressLayout}>
        <div className={st.addressTitle}>
          <Title level={5} weight={500} color="blackYellow" uppercase>
            {address}
          </Title>
          <ArrowDown />
        </div>
        <Text color="deepBlack">{desc}</Text>
      </section>
      <section>{children}</section>
    </section>
  );
}
