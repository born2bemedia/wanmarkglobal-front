export type OriginCase = {
  title: string;
  slug: string;
  subtitle: string;
  thumbnail?: {
    url: string;
  };
  backgroundImage: {
    url: string;
  };
  challenge: string;
  strategy: string;
  result: string;
  firstSection?: {
    image: {
      url: string;
    };
    text: string;
  };
  secondSection?: {
    subtitle: string;
    text: string;
  };
  metaTags?: {
    title: string;
    description: string;
  };
  thirdSection?: {
    subtitle: string;
    strategies: {
      icon: {
        url: string;
      };
      subtitle: string;
      text: string;
    }[];
  };
  fourthSection?: {
    subtitle: string;
    text: string;
  };
  fifthSection?: {
    subtitle: string;
    text: string;
  };
  ctaSection?: {
    subtitle: string;
    image: {
      url: string;
    };
  };
};

export type Case = {
  title: string;
  slug: string;
  subTitle: string;
  thumbnail: string;
  background?: string;
  challenge: string;
  strategy: string;
  result: string;
  firstSection?: { text?: string; image: string };
  secondSection?: { subtitle: string; text: string };
  thirdSection?: {
    subtitle: string;
    strategies: { icon: string; subtitle: string; text: string }[];
  };
  fourthSection?: { subtitle: string; text: string };
  fifthSection?: { subtitle: string; text: string };
  ctaSection?: { subtitle: string; image: string };
};
