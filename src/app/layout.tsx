import type { Metadata } from 'next';

import '@/styles/globals.css';

import { cn } from '@/shared/utils';

import { geistMono, geistSans } from '@/config/fonts';

import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Loyal Luna',
  description: 'Loyal Luna',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        suppressHydrationWarning
        className={cn(geistSans.className, geistMono.className, 'antialiased')}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
