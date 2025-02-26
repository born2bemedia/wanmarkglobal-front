'use client';

import {
  Butterfly,
  DecorElement,
  FiveDots,
  Magnet,
  Stairs,
  Star,
} from '@/shared/ui/icons';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const products = [
  {
    icon: <FiveDots width="70" height="70" />,
    title: 'Business Idea Validation',
    desc: 'Ensure your concept has market demand.',
    cost: '1500.00',
  },
  {
    icon: <DecorElement />,
    title: 'Legal & Registration Guidance',
    desc: 'Understand business types, compliance, and tax basics.',
    cost: '1500.00',
  },
  {
    icon: <Star />,
    title: 'Pricing Strategy',
    desc: 'Define pricing that balances market expectations and profitability.',
    cost: '1190.00',
  },
  {
    icon: <Magnet width="70" height="70" />,
    title: 'Business Model Development',
    desc: 'Structure your business for profitability.',
    cost: '1750.00',
  },
  {
    icon: <Butterfly width="70" height="70" />,
    title: 'Business Model Development',
    desc: 'Structure your business for profitability.',
    cost: '1750.00',
  },
  {
    icon: <Stairs width="70" height="70" />,
    title: '"Startup Essentials" Package',
    desc: 'Get everything you need to establish and structure your business legally—compliance, financial planning, and a solid foundation for success.',
    cost: '1190.00',
  },
];

export function BusinessSetup() {
  return (
    <section>
      <section>
        <Title level={3} weight={500} uppercase>
          Business Setup & Structure
        </Title>
        <Text color="lightBlue">
          Lay the groundwork for a legally sound, financially stable, and
          well-organized business.
        </Text>
      </section>
    </section>
  );
}
