import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { Providers } from './Providers';
import { cn } from '@/lib/utils';
import { TailwindIndicator } from '@/TailwindIndicator';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dix',
  description: 'Le site pour discuter entre amis!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full w-full" lang="en" suppressHydrationWarning>
      <body className={cn('w-full h-full', inter.className)}>
        <Providers>
          {children} <TailwindIndicator />
        </Providers>
      </body>
    </html>
  );
}
