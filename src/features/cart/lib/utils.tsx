import { CartProduct } from '@/features/cart/lib/types';

import { icons } from '../lib/assets';

export const getRandomIcon = () => {
  const randomIndex = Math.floor(Math.random() * icons.length);
  const IconComp = icons[randomIndex];

  return <IconComp width="100" height="100" />;
};

export const calculateTotalPrice = (products: CartProduct[]) =>
  products.reduce((total, { price }) => {
    return total + Number(price);
  }, 0);
