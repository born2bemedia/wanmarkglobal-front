import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
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

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <GoogleAnalytics gaId={process.env.GA_ID ?? ''} />
      <body>
        <NextIntlClientProvider>
          <Header />
          <Preloader />
          {children}
          <Footer />
          <Toaster position="bottom-right" reverseOrder={false} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
