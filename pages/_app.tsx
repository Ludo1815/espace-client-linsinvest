import React from 'react';
import type { AppProps } from 'next/app';
import { ClerkProvider } from '@clerk/nextjs';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <ClerkProvider>
      <Component {...pageProps} key={pathname} />
    </ClerkProvider>
  );
}
