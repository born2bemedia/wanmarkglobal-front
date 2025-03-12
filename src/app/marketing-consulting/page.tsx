import type { Metadata } from 'next';

import { BrandMarketPositioning } from './components/brand-market-positioning';
import { CustomerAcquisition } from './components/customer-acquisition';
import { Hero } from './components/hero';
import { MarketingConsultingPackage } from './components/marketing-consulting-package';
import { MarketingRequestForm } from './components/marketing-request-form';
import { SalesLeadStrategy } from './components/sales-lead-strategy';
import { SocialContentStrategy } from './components/social-content-strategy';
import { WebsiteStrategy } from './components/website-strategy';

export const metadata: Metadata = {
  title: 'Marketing Consulting Services | Wanmark Global',
  description:
    'Boost your brand with expert marketing consulting. Get strategies for customer acquisition, brand positioning, and business growth. Talk to an expert today.',
  openGraph: {
    title: 'Marketing Consulting Services | Wanmark Global',
    description:
      'Boost your brand with expert marketing consulting. Get strategies for customer acquisition, brand positioning, and business growth. Talk to an expert today.',
  },
};

export default function MarketingConsulting() {
  return (
    <main>
      <Hero />
      <BrandMarketPositioning />
      <WebsiteStrategy />
      <SocialContentStrategy />
      <CustomerAcquisition />
      <SalesLeadStrategy />
      <MarketingConsultingPackage />
      <MarketingRequestForm />
    </main>
  );
}
