import type {
  Document,
  Order,
  OriginOrder,
} from '@/features/account/lib/types';

export function originOrdersMapping(res: OriginOrder): Order[] {
  return res.docs.map(order => ({
    orderId: order.orderNumber,
    orderDate: order.createdAt,
    services: order.items.map(item => item.product.title),
    orderStatus: order.status,
    paymentMethod: order.paymentMethod,
    getInvoice:
      order.status === 'completed'
        ? `${process.env.SERVER_URL}${order.invoice?.url}`
        : null,
  }));
}

export function originDocumentsMapping(res: OriginOrder): Document[] {
  return res.docs.map(order => ({
    orderId: order.orderNumber,
    services: order.items.map(item => item.product.title),
    documentation: order.documents?.url
      ? `${process.env.SERVER_URL}${order.documents?.url}`
      : null,
  }));
}
