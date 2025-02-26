import type { Metadata } from 'next';

import { Footer } from '@/shared/ui/components/footer';
import { Header } from '@/shared/ui/components/header';

import 'reset-css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Wanmark Ltd',
  description: 'Business and marketing consulting',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
