import { BusinessSetup } from './components/business-setup';
import { Hero } from './components/hero';
import { OperationsAndEfficiency } from './components/operations-and-efficiency';
import { ScalingBusinessGrowth } from './components/scaling-business-growth';
import { ClientAcquisition } from './components/сlient-acquisition';

export default function BusinessConsulting() {
  return (
    <main>
      <Hero />
      <BusinessSetup />
      <OperationsAndEfficiency />
      <ClientAcquisition />
      <ScalingBusinessGrowth />
    </main>
  );
}
