import { Hero } from './components/hero';
import { HowHelps } from './components/how-helps';
import { WhereToStart } from './components/where-to-start';

export default function Home() {
  return (
    <main>
      <Hero />
      <HowHelps />
      <WhereToStart />
    </main>
  );
}
