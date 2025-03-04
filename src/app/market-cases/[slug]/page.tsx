import { getSingleCase } from '@/features/cases/actions';
import { casesMapping } from '@/features/cases/lib/utils';

import { CtaSection } from './components/cta-section';
import { FifthSection } from './components/fifth-section';
import { FirstSection } from './components/first-section';
import { FourthSection } from './components/fourth-section';
import { Hero } from './components/hero';
import { SecondSection } from './components/second-section';
import { ThirdSection } from './components/third-section';

export default async function MarketCasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const awaitedParams = await params; // Await the params
  const { slug } = awaitedParams;

  const singleCase = await getSingleCase({ slug });
  const caseData = await casesMapping(singleCase);

  return (
    <>
      <Hero
        title={caseData[0].title}
        subtitle={caseData[0].subTitle}
        backgroundImage={caseData[0].background}
      />
      {caseData[0].firstSection?.text && caseData[0].firstSection?.image && (
        <FirstSection
          text={caseData[0].firstSection.text}
          image={caseData[0].firstSection.image}
        />
      )}
      {caseData[0].secondSection?.text &&
        caseData[0].secondSection?.subtitle && (
          <SecondSection
            text={caseData[0].secondSection.text}
            subtitle={caseData[0].secondSection.subtitle}
          />
        )}
      {caseData[0].thirdSection?.subtitle && (
        <ThirdSection
          subtitle={caseData[0].thirdSection.subtitle}
          strategies={caseData[0].thirdSection.strategies ?? []}
        />
      )}

      {caseData[0].fourthSection?.text &&
        caseData[0].fourthSection?.subtitle && (
          <FourthSection
            text={caseData[0].fourthSection.text}
            subtitle={caseData[0].fourthSection.subtitle}
          />
        )}

      {caseData[0].fifthSection?.text && caseData[0].fifthSection?.subtitle && (
        <FifthSection
          text={caseData[0].fifthSection.text}
          subtitle={caseData[0].fifthSection.subtitle}
        />
      )}

      {caseData[0].ctaSection?.image && caseData[0].ctaSection?.subtitle && (
        <CtaSection
          image={caseData[0].ctaSection.image}
          subtitle={caseData[0].ctaSection.subtitle}
        />
      )}
    </>
  );
}
