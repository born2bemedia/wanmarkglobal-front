import { type CartProduct } from '@/features/cart/lib/types';

import { lsRead } from '@/shared/lib/browser';

export const getCartProducts = () => {
  return lsRead<CartProduct[]>('cart', []);
};
