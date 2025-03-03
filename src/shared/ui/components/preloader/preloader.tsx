'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import st from './preloader.module.scss';

export const Preloader = () => {
  const pathname = usePathname();

  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setIsVisible(false), 200);
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <div
      className={st.preloader}
      style={{
        opacity: isLoading ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
      }}
    >
      <Image
        src="/preloader.svg"
        alt="preloader"
        width={100}
        height={100}
        className={st.preloaderImg}
        style={{
          transform: isLoading ? 'scale(1)' : 'scale(1.5)',
        }}
      />
    </div>
  );
};
