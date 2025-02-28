import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import { Toaster } from '@/shared/lib/notify';
import { Footer } from '@/shared/ui/components/footer';
import { Header } from '@/shared/ui/components/header';

import './globals.css';

export const metadata: Metadata = {
  title: 'Wanmark Ltd.',
  description: 'Business and marketing consulting',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <Toaster position="bottom-right" reverseOrder={false} />
      </body>
    </html>
  );
}
