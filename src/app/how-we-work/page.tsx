import type { Metadata } from 'next';

import { HelpToContact } from './components/help-to-contact';
import { Hero } from './components/hero/hero';
import { Overview } from './components/overview';

export const metadata: Metadata = {
  title: 'Our Consulting Process | Wanmark Global',
  description:
    'Learn how we guide you through business and marketing consulting—from strategy development to execution. See our process and get started today.',
  openGraph: {
    title: 'Our Consulting Process | Wanmark Global',
    description:
      'Learn how we guide you through business and marketing consulting—from strategy development to execution. See our process and get started today.',
  },
};

export default function HowWeWork() {
  return (
    <main>
      <Hero />
      <Overview />
      <HelpToContact />
    </main>
  );
}
