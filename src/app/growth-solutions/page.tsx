import { solutionsMapping } from '@/features/package/lib';
import { getProducts } from '@/features/product/services';

import { GeneralRequestForm } from '@/shared/ui/components/general-request-form';

import { CustomSolution } from './components/custom-solution';
import { Hero } from './components/hero';
import { MarketPackages } from './components/market-packages';

export default async function GrowthSolutions() {
  const products = await getProducts({ slug: 'growth-solutions' });
  const solutions = solutionsMapping(products);

  const solutionPairs = Array.from(
    { length: Math.floor(solutions.length / 2) },
    (_, i) => solutions.slice(i * 2, i * 2 + 2),
  );

  return (
    <main>
      <Hero />
      {solutionPairs.map((pair, index) => (
        <MarketPackages key={index} packages={pair} position={index} />
      ))}
      <CustomSolution />
      <GeneralRequestForm />
    </main>
  );
}
