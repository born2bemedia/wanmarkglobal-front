import type { Metadata } from 'next';

import { Achive } from './components/achive';
import { CasesWrap } from './components/cases-wrap';
import { Hero } from './components/hero';

export const metadata: Metadata = {
  title: 'Market Success Stories | Wanmark Global',
  description:
    'Discover how strategic business planning and marketing helped personal projects skyrocket into successful businesses. See what’s possible.',
  openGraph: {
    title: 'Market Success Stories | Wanmark Global',
    description:
      'Discover how strategic business planning and marketing helped personal projects skyrocket into successful businesses. See what’s possible.',
  },
};

export default function Faq() {
  return (
    <main>
      <Hero />
      <CasesWrap />
      <Achive />
    </main>
  );
}
