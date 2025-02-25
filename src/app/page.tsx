import { Hero } from './components/hero';
import { HowHelps } from './components/how-helps';
import { WhereToStart } from './components/where-to-start';
import { Faq } from '@/app/components/faq';
import { HowItWorks } from '@/app/components/how-it-works';

export default function Home() {
  return (
    <main>
      <Hero />
      <HowHelps />
      <WhereToStart />
      <HowItWorks />
      <Faq />
    </main>
  );
}
