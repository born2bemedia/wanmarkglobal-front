import { BrandMarketPositioning } from './components/brand-market-positioning';
import { CustomerAcquisition } from './components/customer-acquisition';
import { Hero } from './components/hero';
import { MarketingConsultingPackage } from './components/marketing-consulting-package';
import { MarketingRequestForm } from './components/marketing-request-form';
import { SalesLeadStrategy } from './components/sales-lead-strategy';
import { SocialContentStrategy } from './components/social-content-strategy';
import { WebsiteStrategy } from './components/website-strategy';

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
