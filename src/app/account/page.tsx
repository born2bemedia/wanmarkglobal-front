import { AccountSettings } from '@/features/account/components';
import { Order } from '@/features/account/lib/types';
import { getUserOrders } from '@/features/account/services';

import { Hero } from './components/hero';

export default async function Account() {
  const res = await getUserOrders({ userID: '2' });
  console.log(res);

  const orders: Order[] = res.docs.map(order => ({
    orderId: order.orderNumber,
    orderDate: order.createdAt,
    services: order.items.map(item => item.product.title),
    orderStatus: order.status,
    paymentMethod: order.paymentMethod,
    getInvoice: `http://localhost:3001${order.invoice?.url}`,
  }));

  console.log(orders);

  return (
    <main>
      <Hero />
      <AccountSettings orders={orders} />
    </main>
  );
}
