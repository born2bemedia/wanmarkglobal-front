import { Hero } from './components/hero';
import { Checkout } from '@/app/cart/components/checkout';

export default function Page() {
  return (
    <main>
      <Hero />
      <Checkout />
    </main>
  );
}
