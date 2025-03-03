'use client';

import Link from 'next/link';

import { Facebook, Instagram, X } from '@/shared/ui/icons';

import st from './social-networks.module.scss';

const socialNetworks = [
  { icon: <Instagram />, link: 'https://www.instagram.com/wanmarkglobal/' },
  { icon: <X />, link: 'https://x.com/WanmarkGlobal' },
  { icon: <Facebook />, link: 'https://www.facebook.com/wanmarkglobal/' },
];

export function SocialNetworks() {
  return socialNetworks.map(({ link, icon }) => (
    <Link key={link} href={link} className={st.socialNetwork}>
      {icon}
    </Link>
  ));
}
