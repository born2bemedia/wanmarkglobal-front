import type { Metadata } from 'next';

import {
  aboutOurServices,
  aboutTheProcess,
  clientsQuestions,
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
  },
};

export default function Faq() {
  return (
    <main>
      <Hero />
      <FaqSection
        title="About Our Services"
        faq={aboutOurServices}
        image={'/faq/faq1.svg'}
      />
      <FaqSection
        title="About the Process"
        faq={aboutTheProcess}
        image={'/faq/faq2.svg'}
      />
      <FaqSection
        title="Clients Questions"
        faq={clientsQuestions}
        image={'/faq/faq3.svg'}
      />
      <HaveQuestion />
    </main>
  );
}
