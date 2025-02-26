'use client';

import Link from 'next/link';

import { SocialNetworks } from '@/shared/ui/components/social-networks';
import { Separator } from '@/shared/ui/kit/separator';
import { Text } from '@/shared/ui/kit/text';

import st from './footer.module.scss';
import { Navigation } from './navigation';

export function Footer() {
  return (
    <footer className={st.layout}>
      <section className={st.footerTop}>
        <div>
          <p className={st.logo}>[BRAND] LOGO</p>
          <Text color="black">
            Business & Marketing, Engineered for Your Success.
          </Text>
          <ol className={st.list}>
            <li>
              <Text size="lg" color="black">
                Address 1
              </Text>
            </li>
            <li>
              <Text size="lg" color="black">
                Address 2
              </Text>
            </li>
            <li>
              <Text size="lg" color="black">
                Email:
              </Text>
            </li>
            <li>
              <Text size="lg" color="black">
                Phone:
              </Text>
            </li>
          </ol>
        </div>
        <Navigation />
      </section>
      <Separator className={st.desktopSeparator} />
      <section className={st.footerBottom}>
        <Text color="black">
          © {new Date().getFullYear()} Wanmark Ltd. All rights reserved.
        </Text>
        <Separator className={st.mobileSeparator} />
        <div className={st.policiesAndNetworks}>
          <ol className={st.policiesLayout}>
            <li>
              <Link href="#">
                <Text color="black">Terms of Use</Text>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Text color="black">Privacy Policy</Text>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Text color="black">Cookie Policy</Text>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Text color="black">Refund Policy</Text>
              </Link>
            </li>
          </ol>
          <span className={st.socialNetworksLayout}>
            <SocialNetworks />
          </span>
        </div>
      </section>
    </footer>
  );
}
