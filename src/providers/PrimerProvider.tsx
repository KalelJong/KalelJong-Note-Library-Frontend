'use client';
import { BaseStyles, ThemeProvider } from '@primer/react';
import React from 'react';

const PrimerProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider preventSSRMismatch colorMode='auto'>
      <BaseStyles>{children}</BaseStyles>
    </ThemeProvider>
  );
};
export default PrimerProvider;
