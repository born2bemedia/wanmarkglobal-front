import { ReactElement } from 'react';

import { lsRead } from '@/shared/lib/browser';

export const getCartProducts = () => {
  return lsRead<
    {
      title: string;
      icon: ReactElement<{
        dangerouslySetInnerHTML: {
          __html: string;
        };
      }>;
      price: string;
      color: string;
    }[]
  >('cart', []);
};
