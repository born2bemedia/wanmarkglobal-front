'use client';

import { PackageCard } from '@/features/package/components';
import { Package } from '@/features/package/lib/types';

import st from './market-packages.module.scss';

export function MarketPackages({
  packages,
  position,
}: {
  packages: Package[];
  position: number;
}) {
  return (
    <section className={st.layout}>
      <PackageCard
        id={packages[0].id}
        title={packages[0].title}
        description={packages[0].description}
        price={packages[0].price}
        services={packages[0].services}
        color={position % 2 === 0 ? 'surfaceYellow' : 'grey'}
      />
      <PackageCard
        id={packages[1].id}
        title={packages[1].title}
        description={packages[1].description}
        price={packages[1].price}
        services={packages[1].services}
        color={position % 2 === 0 ? 'grey' : 'surfaceYellow'}
      />
    </section>
  );
}
