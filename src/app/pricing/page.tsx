import { FixedPackages } from './components/fixed-packages/fixed-packages';
import { Hero } from './components/hero';
import { NeedAssistance } from './components/need-assistance';
import { Why } from './components/why';
import { WhatDetermines } from './what-determines';

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
