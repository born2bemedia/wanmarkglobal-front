'use client';

import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';

import st from './footer.module.scss';
import { Link } from '@/i18n/navigation';

const getNavItems = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('company', { fallback: 'Company' }),
    links: [
      {
        label: t('marketCases', { fallback: 'Market Cases' }),
        href: '/market-cases',
      },
      { label: t('aboutUs', { fallback: 'About Us' }), href: '/about-us' },
      { label: t('contact', { fallback: 'Contact' }), href: '/contact' },
    ],
  },
  {
    title: t('services', { fallback: 'Services' }),
    links: [
      {
        label: t('businessConsulting', { fallback: 'Business Consulting' }),
        href: '/business-consulting',
      },
      {
        label: t('marketingConsulting', { fallback: 'Marketing Consulting' }),
        href: '/marketing-consulting',
      },
      {
        label: t('growthSolutions', { fallback: 'Growth Solutions' }),
        href: '/growth-solutions',
      },
    ],
  },
  {
    title: t('resources', { fallback: 'Resources' }),
    links: [
      {
        label: t('howWeWork', { fallback: 'How We Work' }),
        href: '/how-we-work',
      },
      { label: t('faq', { fallback: 'FAQ' }), href: '/faq' },
      { label: t('pricing', { fallback: 'Pricing' }), href: '/pricing' },
    ],
  },
];

export function Navigation() {
  const t = useTranslations('footer');
  const navItems = getNavItems(t);

  return (
    <nav className={st.navigation}>
      {navItems.map(({ title, links }) => (
        <ul key={title} className={st.navList}>
          {links.map(({ label, href }) => (
            <li key={label}>
              <Link href={href}>
                <Text size="lg" color="darkBlue">
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
