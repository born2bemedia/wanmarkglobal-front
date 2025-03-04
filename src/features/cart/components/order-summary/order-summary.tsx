'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

import { deleteCartProduct, getCartProducts } from '@/features/cart/services';

import { Separator } from '@/shared/ui/kit/separator';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { OrderCard } from '../order-card';
import st from './order-summary.module.scss';

export function OrderSummary() {
  const [products, setProducts] = useState(getCartProducts());

  const totalPrice = useMemo(
    () =>
      products.reduce((total, { price }) => {
        return total + Number(price);
      }, 0),
    [products],
  );

  useEffect(() => {
    setProducts(getCartProducts());
  }, []);

  const onDeleteHandler = useCallback((title: string) => {
    deleteCartProduct(title);
    setProducts(prevProducts =>
      prevProducts.filter(product => product.title !== title),
    );
  }, []);

  return (
    <section className={st.layout}>
      <Title level={5} color="black" uppercase>
        Order Summary
      </Title>
      <Separator className={st.separator} />
      <section className={st.orders}>
        {products.length ? (
          products.map(({ title, color, price, icon }) => (
            <OrderCard
              key={title}
              title={title}
              color={color}
              price={price}
              icon={icon}
              onDelete={() => onDeleteHandler(title)}
            />
          ))
        ) : (
          <Text size="lg">No Products</Text>
        )}
      </section>
      <span className={st.price}>
        <Text size="xl" color="deepBlack" weight={200} uppercase>
          Total:
        </Text>
        <Text size="xl" color="deepBlack" weight={500} uppercase>
          €{totalPrice}
        </Text>
      </span>
    </section>
  );
}
