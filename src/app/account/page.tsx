import dynamic from 'next/dynamic';

import { Order } from '@/features/account/lib/types';
import { getUserOrders } from '@/features/account/services';

import { Hero } from './components/hero';

const AccountSettings = dynamic(() =>
  import('@/features/account/components').then(mod => mod.AccountSettings),
);

export default async function Account() {
  const res = await getUserOrders();

  const orders: Order[] = res.docs.map(order => ({
    orderId: order.orderNumber,
    orderDate: order.createdAt,
    services: order.items.map(item => item.product.title),
    orderStatus: order.status,
    paymentMethod: order.paymentMethod,
    getInvoice: `http://localhost:3001${order.invoice?.url}`,
  }));

  return (
    <main>
      <Hero />
      <AccountSettings orders={orders} />
    </main>
  );
}
