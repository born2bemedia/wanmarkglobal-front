import { OriginProduct } from '@/features/product/lib/types';
import { getIcon } from '@/features/product/services';

export async function servicesMapping(products: OriginProduct[]) {
  return await Promise.all(
    products.map(async product => {
      const iconSvg = product.icon?.url
        ? await getIcon(product.icon.url).then(svg =>
            svg?.replace(/(width|height)="[^"]*"/g, ''),
          )
        : null;

      return {
        id: product.id,
        price: product.price,
        icon: iconSvg ? (
          <span
            dangerouslySetInnerHTML={{ __html: iconSvg }}
            style={{ width: '18px', height: '18px' }}
          />
        ) : (
          <span>No Icon</span>
        ),
        title: product.title,
        color: product.color,
      };
    }),
  );
}
