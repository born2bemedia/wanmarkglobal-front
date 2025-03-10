import type { User } from '@/core/user/lib/types';

export type Order = {
  orderId: string;
  orderDate: string;
  services: string[];
  orderStatus: string;
  paymentMethod?: string;
};

export type OriginOrder = {
  docs: {
    id: number;
    orderNumber: string;
    user?: User;
    items: Item[];
    total: number;
    status: string;
    paymentMethod?: string;
    orderNotes: string;
    billingAddress: BillingAddress;
    createdAt: string;
    invoice?: Invoice;
    updatedAt: string;
  }[];
};

type Item = {
  id: string;
  product: Product;
  quantity: number;
  price: number;
};

type Product = {
  id: number;
  title: string;
  slug: string;
  icon: Icon;
  price: number;
  category: Category;
  excerpt: string;
  color: string;
  updatedAt: string;
  createdAt: string;
};

type Icon = {
  id: number;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url: string;
  thumbnailURL: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
};

type Category = {
  id: number;
  title: string;
  slug: string;
  description: string;
  updatedAt: string;
  createdAt: string;
};

type BillingAddress = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  country: string;
  zip: string;
};

type Invoice = {
  id: number;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url: string;
  thumbnailURL: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  focalX: number;
  focalY: number;
};
