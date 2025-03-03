import { BusinessPackages } from './components/business-packages';
import { CustomSolution } from './components/custom-solution';
import { Hero } from './components/hero';
import { MarketPackages } from './components/market-packages';
import { PackageRequestForm } from './components/package-request-form';

export default function GrowthSolutions() {
  return (
    <main>
      <Hero />
      <MarketPackages />
      <BusinessPackages />
      <CustomSolution />
      <PackageRequestForm />
    </main>
  );
}
