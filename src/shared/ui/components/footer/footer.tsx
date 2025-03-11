'use client';

import Image from 'next/image';
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
          <Link href="/">
            <Image src="/full-logo.svg" alt="Wanmark" width={130} height={25} />
          </Link>
          <Text color="darkBlue" weight={300} className={st.desc}>
            Business & Marketing, Engineered for Your Success.
          </Text>
          <ol className={st.list}>
            <li>
              <Text size="lg" color="darkBlue">
                <strong className={st.highlighted}>Registered Address:</strong>{' '}
                2nd Floor College House, 17 King Edwards Road, Ruislip, London,
                United Kingdom, HA4 7AE
              </Text>
            </li>
            <li>
              <Text size="lg" color="darkBlue">
                <strong className={st.highlighted}>Office address:</strong> Unit
                7, 6 Westgate Street, London, E8 3RN, United Kingdom
              </Text>
            </li>
            <li>
              <Link href="mailto:info@wanmarkglobal.com">
                <Text size="lg" color="darkBlue">
                  info@wanmarkglobal.com
                </Text>
              </Link>
            </li>
            <li>
              <Link href="tel:+447418036208">
                <Text size="lg" color="darkBlue">
                  +447418036208
                </Text>
              </Link>
            </li>
          </ol>
        </div>
        <Navigation />
      </section>
      <Separator className={st.desktopSeparator} />
      <section className={st.footerBottom}>
        <Text color="darkBlue" weight={300}>
          © {new Date().getFullYear()} Wanmark Ltd. All rights reserved.
        </Text>
        <Separator className={st.mobileSeparator} />
        <div className={st.policiesAndNetworks}>
          <ol className={st.policiesLayout}>
            <li>
              <Link href="/terms-of-use">
                <Text color="darkBlue">Terms of Use</Text>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Text color="darkBlue">Privacy Policy</Text>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Text color="darkBlue">Cookie Policy</Text>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Text color="darkBlue">Refund Policy</Text>
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
