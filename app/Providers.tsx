'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';

export const Providers = ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider attribute="class" defaultTheme="systeme" enableSystem>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
};
