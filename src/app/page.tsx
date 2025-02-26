import { Faq } from './components/faq';
import { Hero } from './components/hero';
import { HowHelps } from './components/how-helps';
import { HowItWorks } from './components/how-it-works';
import { Stories } from './components/stories';
import { WhereToStart } from './components/where-to-start';

export default function Home() {
  return (
    <main>
      <Hero />
      <HowHelps />
      <WhereToStart />
      <HowItWorks />
      <Faq />
      <Stories />
    </main>
  );
}
