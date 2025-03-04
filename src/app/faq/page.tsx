import {
  aboutOurServices,
  aboutTheProcess,
  clientsQuestions,
} from '@/shared/lib/faq';

import { FaqSection } from './components/faq-section';
import { HaveQuestion } from './components/have-question';
import { Hero } from './components/hero';

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
