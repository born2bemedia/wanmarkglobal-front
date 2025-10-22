'use client';

import { JSX, ReactNode } from 'react';
import toast from 'react-hot-toast';
import { useTranslations } from 'next-intl';

import { getCartProducts } from '@/features/cart/services';

import { lsWrite } from '@/shared/lib/browser';
import { cn } from '@/shared/lib/styles';
import { ArrowDown, ArrowTopRightCircle } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './package-card.module.scss';

export function PackageCard({
  id,
  icon,
  description,
  price,
  title,
  color,
  services,
}: {
  id: number;
  icon?: string;
  title: string;
  description: string;
  price: number;
  onOrder?: () => void;
  services: { icon: JSX.Element; title: string }[];
  color: 'surfaceYellow' | 'grey';
}) {
  const t = useTranslations('packageCard');

  const layoutClasses = cn(st.layout, {
    [st.surfaceYellowColor]: color === 'surfaceYellow',
    [st.greyColor]: color === 'grey',
  });

  const onOrderHandler = ({
    id,
    title,
    icon,
    price,
    color,
  }: {
    id: number;
    title: string;
    icon: ReactNode;
    price: number;
    color: string;
  }) => {
    const products = getCartProducts();

    const existingProduct = products.find(product => product.title === title);

    if (existingProduct) {
      toast.error(
        `${t('productAlreadyAdded.0', { fallback: 'Product' })} ${title} ${t('productAlreadyAdded.1', { fallback: 'already added in the cart' })}`,
      );
    } else {
      const orderProducts = [...products, { id, title, icon, price, color }];
      lsWrite('cart', orderProducts);
      toast.success(
        `${t('productAdded.0', { fallback: 'Product' })} ${title} ${t('productAdded.1', { fallback: 'added to cart' })}`,
      );
    }
  };

  return (
    <article className={layoutClasses}>
      <section className={st.titleLayout}>
        <Title
          level={4}
          weight={500}
          color={color === 'surfaceYellow' ? 'blackYellow' : 'mediumBlue'}
        >
          {title}
        </Title>
        <ArrowDown />
      </section>
      <section className={st.contentLayout}>
        <Title level={5} weight={500} className={st.title}>
          {description}
        </Title>
        <Text color="lightBlue" weight={500} size="lg" className={st.includes}>
          {t('includes', { fallback: 'Includes:' })}
        </Text>
        <section className={st.serviceLayout}>
          {services.map(({ icon, title }) => (
            <section key={title} className={st.serviceCard}>
              {icon}
              <Text color="black" weight={500}>
                {title}
              </Text>
            </section>
          ))}
        </section>
        <section className={st.orderLayout}>
          <Title level={4} color="mediumBlue" weight={300}>
            {t('price', { fallback: 'Price:' })}{' '}
            <span className={st.price}>€{price}</span>
          </Title>
          <Button
            variant="black"
            className={st.orderBtn}
            onClick={() => onOrderHandler({ id, icon, title, price, color })}
          >
            {t('orderNow', { fallback: 'Order Now' })}
            <ArrowTopRightCircle color="black" />
          </Button>
        </section>
      </section>
    </article>
  );
}
