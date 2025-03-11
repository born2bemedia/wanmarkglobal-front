import { JSX } from 'react';

export type Product = {
  id: number;
  icon: JSX.Element;
  color: string;
  title: string;
  desc: string;
  cost: number;
};

export type OriginProduct = {
  id: number;
  icon?: {
    url: string;
  };
  color: string;
  title: string;
  excerpt: string;
  price: number;
  includes?: Includes;
};

type Includes = {
  root: {
    type: string;
    format: string;
    indent: number;
    version: number;
    children: IncludesChildren[];
    direction: string;
  };
};

type IncludesChildren = {
  tag?: string;
  type: string;
  start?: number;
  format: string;
  indent: number;
  version: number;
  children: IncludesSubChildren[];
  listType?: string;
  direction?: string;
  textStyle?: string;
  textFormat?: number;
};

type IncludesSubChildren = {
  type: string;
  value: number;
  format: string;
  indent: number;
  version: number;
  children: IncludesNestedChildren[];
  direction: string;
};

type IncludesNestedChildren = {
  mode: string;
  text: string;
  type: string;
  style: string;
  detail: number;
  format: number;
  version: number;
};
