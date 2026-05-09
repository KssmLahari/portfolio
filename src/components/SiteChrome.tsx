'use client';

import type { ReactNode } from 'react';
import DarkModeToggle from '@/components/DarkModeToggle';
import Navigation from '@/components/Navigation';

/** Nav + theme toggle + top padding so content clears the floating bar. */
export default function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <DarkModeToggle />
      <Navigation />
      <div className="pt-24 sm:pt-32">{children}</div>
    </>
  );
}
