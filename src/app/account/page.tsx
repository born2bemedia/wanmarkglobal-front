import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

import {
  originDocumentsMapping,
  originOrdersMapping,
} from '@/features/account/lib';
import { getUserOrders } from '@/features/account/services';

import { Hero } from './components/hero';

const AccountSettings = dynamic(() =>
  import('@/features/account/components').then(mod => mod.AccountSettings),
);

export const metadata: Metadata = {
  title: 'Account | Wanmark Global',
  openGraph: {
    title: 'Account | Wanmark Global',
  },
  robots: 'noindex',
};

export default async function Account() {
  const res = await getUserOrders();

  const orders = originOrdersMapping(res);
  const documents = originDocumentsMapping(res);

  return (
    <main>
      <Hero />
      <AccountSettings orders={orders} documents={documents} />
    </main>
  );
}
