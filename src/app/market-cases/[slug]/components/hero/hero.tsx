'use client';

import { HeroBanner } from '@/shared/ui/components/hero-banner';
import { ArrowTopRightCircle } from '@/shared/ui/icons';

export function Hero({
  title,
  subtitle,
  backgroundImage,
}: {
  title: string;
  subtitle: string;
  backgroundImage: string;
}) {
  return (
    <HeroBanner
      color="#000000"
      title={{
        color: 'white',
        value: title,
        width: '640px',
      }}
      backgroundImage={backgroundImage}
      contactText={{
        color: 'white',
        value: subtitle,
        width: '640px',
      }}
      scrollToExplore={{
        color: 'white',
        value: 'Scroll to explore',
      }}
      contactUsIcon={<ArrowTopRightCircle color="blue" />}
    />
  );
}
