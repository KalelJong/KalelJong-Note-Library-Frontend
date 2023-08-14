'use client';
import { BaseStyles, ThemeProvider } from '@primer/react';

const PrimerProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider preventSSRMismatch colorMode="auto">
      <BaseStyles className="w-full h-full">{children}</BaseStyles>
    </ThemeProvider>
  );
};
export default PrimerProvider;
