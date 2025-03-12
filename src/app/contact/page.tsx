import type { Metadata } from 'next';

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

export default function Contact() {
  return (
    <main>
      <Hero />
      <GeneralRequestForm
        subject="Contact"
        title="General Inquiry Form"
        description="Need assistance or more information? Send us your request, and we’ll respond shortly."
      />
      <ContactInfo />
      <OurOffices />
    </main>
  );
}
