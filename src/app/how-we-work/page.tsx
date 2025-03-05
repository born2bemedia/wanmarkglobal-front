import { HelpToContact } from './components/help-to-contact';
import { Hero } from './components/hero/hero';
import { Overview } from './components/overview';

export default function HowWeWork() {
  return (
    <main>
      <Hero />
      <Overview />
      <HelpToContact />
    </main>
  );
}
