import { GeneralRequestForm } from '@/shared/ui/components/general-request-form';

import { ContactInfo } from './components/contact-info';
import { Hero } from './components/hero';
import { OurOffices } from './components/our-offices';

export default function Contact() {
  return (
    <main>
      <Hero />
      <GeneralRequestForm
        subject="Contact"
        title="General Inquiry Form"
        description="Need assistance or more information? Send us your request, and we’ll respond shortly."
      />
      <ContactInfo />
      <OurOffices />
    </main>
  );
}
