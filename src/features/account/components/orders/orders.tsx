'use client';

import { type Order } from '@/features/account/lib/types';

import { TabHeading } from '../tab-heading';
import { TabLayout } from '../tab-layout';
import { OrdersTable } from './orders-table';

export function Orders({ values }: { values: Order[] }) {
  return (
    <TabLayout>
      <TabHeading
        title="Your Orders"
        desc="Review your past and current orders, track progress, and check payment
          status."
      />
      <OrdersTable values={values} />
    </TabLayout>
  );
}
