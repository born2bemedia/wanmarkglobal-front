import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import {
  getAboutOurServices,
  getAboutTheProcess,
  getClientsQuestions,
} from '@/shared/lib/faq';

import { FaqSection } from './components/faq-section';
import { HaveQuestion } from './components/have-question';
import { Hero } from './components/hero';

export const metadata: Metadata = {
  title: 'FAQ – Business & Marketing Consulting Answers | Wanmark Global',
  description:
    'Find answers to common questions about our consulting services, process, payments, and how we help individuals grow their businesses.',
  openGraph: {
    title: 'FAQ – Business & Marketing Consulting Answers | Wanmark Global',
    description:
      'Find answers to common questions about our consulting services, process, payments, and how we help individuals grow their businesses.',
    images: 'https://wanmarkglobal.com/meta/faq.png',
  },
};

export default async function Faq() {
  const ts = await getTranslations('faq.aboutOurServices');
  const tp = await getTranslations('faq.aboutTheProcess');
  const tq = await getTranslations('faq.clientsQuestions');

  const aboutOurServices = getAboutOurServices(ts);
  const aboutTheProcess = getAboutTheProcess(tp);
  const clientsQuestions = getClientsQuestions(tq);

  return (
    <main>
      <Hero />
      <FaqSection
        title={ts('title', { fallback: 'About Our Services' })}
        faq={aboutOurServices}
        image={'/faq/faq1.svg'}
      />
      <FaqSection
        title={tp('title', { fallback: 'About the Process' })}
        faq={aboutTheProcess}
        image={'/faq/faq2.svg'}
      />
      <FaqSection
        title={tq('title', { fallback: 'Clients Questions' })}
        faq={clientsQuestions}
        image={'/faq/faq3.svg'}
      />
      <HaveQuestion />
    </main>
  );
}
