import { type OriginOrder } from '@/features/account/lib/types';

export function originOrdersMapping(res: OriginOrder) {
  return res.docs.map(order => ({
    orderId: order.orderNumber,
    orderDate: order.createdAt,
    services: order.items.map(item => item.product.title),
    orderStatus: order.status,
    paymentMethod: order.paymentMethod,
    getInvoice: `http://localhost:3001${order.invoice?.url}`,
  }));
}
