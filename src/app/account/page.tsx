import dynamic from 'next/dynamic';

import { originOrdersMapping } from '@/features/account/lib';
import { getUserOrders } from '@/features/account/services';

import { Hero } from './components/hero';

const AccountSettings = dynamic(() =>
  import('@/features/account/components').then(mod => mod.AccountSettings),
);

export default async function Account() {
  const res = await getUserOrders();

  const orders = originOrdersMapping(res);

  return (
    <main>
      <Hero />
      <AccountSettings orders={orders} />
    </main>
  );
}
