import type { Metadata } from 'next';

import { BusinessConsultingPackage } from './components/business-consulting-package';
import { BusinessSetup } from './components/business-setup';
import { Hero } from './components/hero';
import { OperationsAndEfficiency } from './components/operations-and-efficiency';
import { PackageRequestForm } from './components/package-request-form';
import { ScalingBusinessGrowth } from './components/scaling-business-growth';
import { ClientAcquisition } from './components/сlient-acquisition';

export const metadata: Metadata = {
  title: 'Business Consulting Services | Wanmark Global',
  description:
    'Get structured business consulting to validate your idea, develop a solid business model, and scale successfully. Start your journey today.',
  openGraph: {
    title: 'Business Consulting Services | Wanmark Global',
    description:
      'Get structured business consulting to validate your idea, develop a solid business model, and scale successfully. Start your journey today.',
    images: 'https://wanmarkglobal.com/meta/business-consulting.png',
  },
};

export default async function BusinessConsulting({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const awaitedParams = await params;
  const { locale } = awaitedParams;

  return (
    <main>
      <Hero />
      <BusinessSetup locale={locale} />
      <OperationsAndEfficiency locale={locale} />
      <ClientAcquisition locale={locale} />
      <ScalingBusinessGrowth locale={locale} />
      <BusinessConsultingPackage />
      <PackageRequestForm locale={locale} />
    </main>
  );
}
