import { JSX } from 'react';

export type Product = {
  id: string;
  icon: JSX.Element;
  color: string;
  title: string;
  desc: string;
  cost: string;
};

export type OriginProduct = {
  id: string;
  icon?: {
    url: string;
  };
  color: string;
  title: string;
  excerpt: string;
  price: string;
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
