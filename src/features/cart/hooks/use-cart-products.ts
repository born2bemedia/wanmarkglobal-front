'use client';

import { useEffect, useState } from 'react';

import { getCartProducts } from '@/features/cart/services';

export const useCartProducts = () => {
  const [products, setProducts] = useState(getCartProducts());

  useEffect(() => {
    setProducts(getCartProducts());
  }, []);

  return { products, setProducts };
};
