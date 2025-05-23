import { useEffect, useState } from 'react';

export const useWindow = () => {
  const [width, setWidth] = useState<number | undefined>(
    typeof window !== 'undefined' ? window.innerWidth : undefined,
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { width: width ?? 0 };
};
