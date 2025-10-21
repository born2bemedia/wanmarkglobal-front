'use client';

import { useTranslations } from 'next-intl';

import { type Order } from '@/features/account/lib/types';

import { TabHeading } from '../tab-heading';
import { TabLayout } from '../tab-layout';
import { OrdersTable } from './orders-table';

export function Orders({ values }: { values: Order[] }) {
  const t = useTranslations('account.orders');

  return (
    <TabLayout>
      <TabHeading
        title={t('title', { fallback: 'Your Orders' })}
        desc={t('desc', {
          fallback:
            'Review your past and current orders, track progress, and check payment status.',
        })}
      />
      <OrdersTable values={values} />
    </TabLayout>
  );
}
