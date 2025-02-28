import { BusinessConsultingPackage } from './components/business-consulting-package';
import { BusinessSetup } from './components/business-setup';
import { Hero } from './components/hero';
import { OperationsAndEfficiency } from './components/operations-and-efficiency';
import { PackageRequestForm } from './components/package-request-form';
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
      <BusinessConsultingPackage />
      <PackageRequestForm />
    </main>
  );
}
