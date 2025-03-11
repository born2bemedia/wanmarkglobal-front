import { getCases } from '@/features/cases/actions';
import { casesLoopMapping } from '@/features/cases/lib/utils';

import { Faq } from './components/faq';
import { Hero } from './components/hero';
import { HowHelps } from './components/how-helps';
import { HowItWorks } from './components/how-it-works';
import { Stories } from './components/stories';
import { WhereToStart } from './components/where-to-start';

export default async function Home() {
  const cases = await getCases();
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
