'use client';

import Link from 'next/link';

import { Facebook, Instagram, X } from '@/shared/ui/icons';

import st from './social-networks.module.scss';

const socialNetworks = [
  { icon: <Instagram />, link: 'https://instagram.com/' },
  { icon: <X />, link: 'https://x.com/' },
  { icon: <Facebook />, link: 'https://www.facebook.com/' },
];

export function SocialNetworks() {
  return socialNetworks.map(({ link, icon }) => (
    <Link key={link} href={link} className={st.socialNetwork}>
      {icon}
    </Link>
  ));
}
