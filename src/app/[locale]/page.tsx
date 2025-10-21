import type { Metadata } from 'next';

import { getCases } from '@/features/cases/actions';
import { casesLoopMapping } from '@/features/cases/lib/utils';

import { Faq } from './components/faq';
import { Hero } from './components/hero';
import { HowHelps } from './components/how-helps';
import { HowItWorks } from './components/how-it-works';
import { Stories } from './components/stories';
import { WhereToStart } from './components/where-to-start';

export const metadata: Metadata = {
  title: 'Business & Marketing Consulting | Wanmark Global',
  description:
    'Get expert business and marketing consulting to turn your ideas into a structured, profitable business. Book a consultation today.',
  openGraph: {
    title: 'Business & Marketing Consulting | Wanmark Global',
    description:
      'Get expert business and marketing consulting to turn your ideas into a structured, profitable business. Book a consultation today.',
    images: 'https://wanmarkglobal.com/meta/home.png',
  },
};

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const awaitedParams = await params;
  const { locale } = awaitedParams;

  const cases = await getCases({ params: { locale } });
  const casesData = await casesLoopMapping(cases.reverse());

  const stories = casesData.map(({ slug, title, subTitle, thumbnail }) => ({
    id: slug,
    title,
    type: subTitle,
    thumbnail,
  }));

  return (
    <main>
      <Hero />
      <HowHelps />
      <WhereToStart />
      <HowItWorks />
      <Faq />
      <Stories values={stories} />
    </main>
  );
}
