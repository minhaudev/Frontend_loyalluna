'use client';

import { useRouter } from 'next/navigation';
import { NextUIProvider } from '@nextui-org/system';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export interface ProvidersProps {
  children: React.ReactNode;
}
export function Providers({ children }: ProvidersProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider attribute="class" forcedTheme="light">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
