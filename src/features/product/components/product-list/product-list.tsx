'use client';

import { ReactNode } from 'react';
import toast from 'react-hot-toast';

import { getCartProducts } from '@/features/cart/services';
import { ProductCard } from '@/features/product/components';
import { Product } from '@/features/product/lib';

import { lsWrite } from '@/shared/lib/browser';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './product-list.module.scss';

export function ProductList({
  products,
  title,
  desc,
}: {
  products: Product[];
  title: string;
  desc: string;
}) {
  const onOrderHandler = ({
    id,
    title,
    icon,
    price,
    color,
  }: {
    id: string;
    title: string;
    icon: ReactNode;
    price: string;
    color: string;
  }) => {
    const products = getCartProducts();

    const existingProduct = products.find(product => product.title === title);

    if (existingProduct) {
      toast.error(`Product ${title} already added in the cart`);
    } else {
      const orderProducts = [...products, { id, title, icon, price, color }];
      lsWrite('cart', orderProducts);
      toast.success(`Product ${title} added to cart`);
    }
  };

  return (
    <section className={st.layout}>
      <section className={st.titleLayout}>
        <Title level={3} weight={500} className={st.titleEl} uppercase>
          {title}
        </Title>
        <Text color="lightBlue" className={st.textEl}>
          {desc}
        </Text>
      </section>
      <section className={st.products}>
        {products.map(product => (
          <ProductCard
            key={product.title}
            {...product}
            onOrder={onOrderHandler}
          />
        ))}
      </section>
    </section>
  );
}
