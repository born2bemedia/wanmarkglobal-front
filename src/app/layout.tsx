import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';

import { Toaster } from '@/shared/lib/notify';
import { Footer } from '@/shared/ui/components/footer';
import { Header } from '@/shared/ui/components/header';
import { Preloader } from '@/shared/ui/components/preloader';

import './globals.css';

export const metadata: Metadata = {
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/logo.svg',
        href: '/logo.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/logo.svg',
        href: '/logo.svg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId={process.env.GA_ID ?? ''} />
      <body>
        <Header />
        <Preloader />
        {children}
        <Footer />
        <Toaster position="bottom-right" reverseOrder={false} />
      </body>
    </html>
  );
}
