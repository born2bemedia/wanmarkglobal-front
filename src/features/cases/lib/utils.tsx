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
      };
    }),
  );
}
