'use client';

import { ProductCard } from '@/features/product/components';
import { Product } from '@/features/product/lib';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './product-list.module.scss';

export function ProductList({
  products,
  title,
  desc,
  onOrder,
}: {
  products: Product[];
  title: string;
  desc: string;
  onOrder?: () => void;
}) {
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
          <ProductCard key={product.title} {...product} onOrder={onOrder} />
        ))}
      </section>
    </section>
  );
}
