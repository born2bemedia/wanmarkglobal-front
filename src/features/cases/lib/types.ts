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
};

export type Case = {
  title: string;
  slug: string;
  subTitle: string;
  thumbnail: string;
  background: string;
  challenge: string;
  strategy: string;
  result: string;
};
