import type { Metadata } from 'next';

import { FixedPackages } from './components/fixed-packages/fixed-packages';
import { Hero } from './components/hero';
import { NeedAssistance } from './components/need-assistance';
import { Why } from './components/why';
import { WhatDetermines } from './what-determines';

export const metadata: Metadata = {
  title: 'How We Price Our Services | Wanmark Global',
  description:
    'Learn how our business and marketing consulting prices are structured. Understand what goes into the cost and why expert guidance is a smart investment.',
  openGraph: {
    title: 'How We Price Our Services | Wanmark Global',
    description:
      'Learn how our business and marketing consulting prices are structured. Understand what goes into the cost and why expert guidance is a smart investment.',
  },
};

export default function PricingPage() {
  return (
    <>
      <Hero />
      <WhatDetermines />
      <FixedPackages />
      <Why />
      <NeedAssistance />
    </>
  );
}
