import { OriginProduct } from '@/features/product/lib';

import { colors, icons } from './assets';

const getServiceIcon = ({
  color,
  position,
}: {
  position: number;
  color: string;
}) => {
  const IconComp = icons[position];
  return <IconComp width="18" height="18" color={colors.get(color)} />;
};

export function servicesMapping({
  name,
  position,
  color,
}: {
  name: string;
  color: string;
  position: number;
}) {
  const icon = getServiceIcon({ position, color });

  return {
    icon,
    title: name,
  };
}

export const solutionsMapping = (products: OriginProduct[]) => {
  return products.map(product => {
    const list = product.includes?.root.children.find(
      item => item.type === 'list',
    );

    const originServices =
      list?.children.flatMap(item =>
        item.children.map(children => ({ name: children.text })),
      ) ?? [];

    return {
      id: product.id,
      icon: product.icon?.url,
      description: product.excerpt,
      title: product.title,
      price: product.price,
      color: product.color,
      services: originServices.map(({ name }, i) =>
        servicesMapping({ name, color: product.color, position: i }),
      ),
    };
  });
};
