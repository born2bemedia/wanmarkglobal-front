'use client';

import Link from 'next/link';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './footer.module.scss';

const navItems = [
  {
    title: 'Company',
    links: [
      { label: 'Market Cases', href: '/market-cases' },
      { label: 'About Us', href: '/about-us' },
      { label: 'Contact', href: '/contacts' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Business Consulting', href: '/business-consulting' },
      { label: 'Marketing Consulting', href: '/marketing-consulting' },
      { label: 'Growth Solutions', href: '/growth-solutions' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'How We Work', href: '/how-we-work' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
];

export function Navigation() {
  return (
    <nav className={st.navigation}>
      {navItems.map(({ title, links }) => (
        <ul key={title} className={st.navList}>
          <li className={st.title}>
            <Title level={6} weight={500}>
              {title}
            </Title>
          </li>
          {links.map(({ label, href }) => (
            <li key={label}>
              <Link href={href}>
                <Text size="lg" color="black">
                  {label}
                </Text>
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </nav>
  );
}
