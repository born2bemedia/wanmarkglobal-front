import { OriginProduct } from '@/features/product/lib/types';
import { getIcon } from '@/features/product/services';

export async function productsMapping(products: OriginProduct[]) {
  return await Promise.all(
    products.map(async product => {
      const iconSvg = product.icon?.url
        ? await getIcon(product.icon.url)
        : null;

      return {
        icon: iconSvg ? (
          <span dangerouslySetInnerHTML={{ __html: iconSvg }} />
        ) : (
          <span>No Icon</span>
        ),
        color: product.color,
        title: product.title,
        desc: product.excerpt,
        cost: product.price,
      };
    }),
  );
}
