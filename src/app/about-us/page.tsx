import { Hero } from './components/hero';
import { NeedAssistance } from './components/need-assistance';
import { ProvenFormulas } from './components/proven-formulas';
import { WhatYouGet } from './components/what-you-get';
import { WhyChoose } from './components/why-choose';

export default function AboutUsPage() {
  return (
    <>
      <Hero />
      <WhatYouGet />
      <ProvenFormulas />
      <WhyChoose />
      <NeedAssistance />
    </>
  );
}
