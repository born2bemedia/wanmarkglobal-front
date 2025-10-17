import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { GeneralRequestForm } from '@/shared/ui/components/general-request-form';

import { ContactInfo } from './components/contact-info';
import { Hero } from './components/hero';
import { OurOffices } from './components/our-offices';

export const metadata: Metadata = {
  title: 'Contact Us | Wanmark Global',
  description:
    'Contact Wanmark Global for expert business and marketing consulting. Send us a request, email, or call us today.',
  openGraph: {
    title: 'Contact Us | Wanmark Global',
    description:
      'Contact Wanmark Global for expert business and marketing consulting. Send us a request, email, or call us today.',
    images: 'https://wanmarkglobal.com/meta/contact-us.png',
  },
};

export default async function Contact() {
  const t = await getTranslations('contact.generalRequestForm');

  return (
    <main>
      <Hero />
      <GeneralRequestForm
        subject="Contact"
        title={t('title', { fallback: 'General Inquiry Form' })}
        description={t('description', {
          fallback:
            'Need assistance or more information? Send us your request, and we’ll respond shortly.',
        })}
      />
      <ContactInfo />
      <OurOffices />
    </main>
  );
}
