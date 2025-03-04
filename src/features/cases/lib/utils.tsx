import { OriginCase } from './types';

export async function casesMapping(cases: OriginCase[]) {
  return await Promise.all(
    cases.map(async item => {
      return {
        title: item.title,
        slug: item.slug,
        subTitle: item.subtitle,
        thumbnail: `${process.env.SERVER_URL}${item.thumbnail?.url}`,
        background: `${process.env.SERVER_URL}${item.backgroundImage?.url}`,
        challenge: item.challenge,
        strategy: item.strategy,
        result: item.result,
        firstSection: {
          text: item.firstSection?.text,
          image: `${process.env.SERVER_URL}${item.firstSection?.image?.url}`,
        },
        secondSection: {
          subtitle: item.secondSection?.subtitle,
          text: item.secondSection?.text,
        },
        thirdSection: {
          subtitle: item.thirdSection?.subtitle,
          strategies: item.thirdSection?.strategies?.map(strategy => ({
            icon: `${process.env.SERVER_URL}${strategy.icon?.url}`,
            subtitle: strategy.subtitle,
            text: strategy.text,
          })),
        },
        fourthSection: {
          subtitle: item.fourthSection?.subtitle,
          text: item.fourthSection?.text,
        },
        fifthSection: {
          subtitle: item.fifthSection?.subtitle,
          text: item.fifthSection?.text,
        },
        ctaSection: {
          subtitle: item.ctaSection?.subtitle,
          image: `${process.env.SERVER_URL}${item.ctaSection?.image?.url}`,
        },
      };
    }),
  );
}

export async function casesLoopMapping(cases: OriginCase[]) {
  return await Promise.all(
    cases.map(async item => {
      return {
        title: item.title,
        slug: item.slug,
        subTitle: item.subtitle,
        thumbnail: `${process.env.SERVER_URL}${item.thumbnail?.url}`,
        challenge: item.challenge,
        strategy: item.strategy,
        result: item.result,
      };
    }),
  );
}
