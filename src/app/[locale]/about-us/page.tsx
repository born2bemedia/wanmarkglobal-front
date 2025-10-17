import type { Metadata } from 'next';

import { Hero } from './components/hero';
import { NeedAssistance } from './components/need-assistance';
import { ProvenFormulas } from './components/proven-formulas';
import { WhatYouGet } from './components/what-you-get';
import { WhyChoose } from './components/why-choose';

export const metadata: Metadata = {
  title: 'About Us | Wanmark Global',
  description:
    'Learn how Wanmark Global helps individuals turn ideas into successful businesses with expert business and marketing consulting.',
  openGraph: {
    title: 'About Us | Wanmark Global',
    description:
      'Learn how Wanmark Global helps individuals turn ideas into successful businesses with expert business and marketing consulting.',
    images: 'https://wanmarkglobal.com/meta/about-us.png',
  },
};

export default function AboutUsPage() {
  return (
    <main>
      <Hero />
      <WhatYouGet />
      <ProvenFormulas />
      <WhyChoose />
      <NeedAssistance />
    </main>
  );
}
