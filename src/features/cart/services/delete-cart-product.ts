import { lsRemove, lsWrite } from '@/shared/lib/browser';

import { getCartProducts } from './get-cart-products';

export const deleteCartProduct = (title: string) => {
  const products = getCartProducts();
  const newProducts = products.filter(product => product.title !== title);
  lsWrite('cart', newProducts);
};

export const clearCart = () => {
  lsRemove('cart');
};
