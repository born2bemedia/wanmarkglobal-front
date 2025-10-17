'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';

import { calculateTotalPrice } from '@/features/cart/lib/utils';
import { deleteCartProduct, getCartProducts } from '@/features/cart/services';

import { Separator } from '@/shared/ui/kit/separator';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { OrderCard } from '../order-card';
import st from './order-summary.module.scss';

export function OrderSummary() {
  const [products, setProducts] = useState(getCartProducts());

  const t = useTranslations('cart.checkout.orderSummary');

  const totalPrice = useMemo(() => calculateTotalPrice(products), [products]);

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
        {t('title', { fallback: 'Order Summary' })}
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
          <Text size="lg">{t('noProducts', { fallback: 'No Products' })}</Text>
        )}
      </section>
      <span className={st.price}>
        <Text size="xl" color="deepBlack" weight={200} uppercase>
          {t('total', { fallback: 'Total:' })}
        </Text>
        <Text size="xl" color="deepBlack" weight={500} uppercase>
          €{totalPrice}
        </Text>
      </span>
    </section>
  );
}
