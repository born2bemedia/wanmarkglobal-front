import { ReactElement } from 'react';

export type OrderBilling = {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  zip?: string;
  city?: string;
  street?: string;
  country?: string;
};

export type CartProduct = {
  id: number;
  title: string;
  icon: ReactElement<{
    dangerouslySetInnerHTML: {
      __html: string;
    };
  }>;
  price: number;
  color: string;
};
