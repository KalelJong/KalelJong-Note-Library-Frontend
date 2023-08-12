"use client";
import { BaseStyles, ThemeProvider, theme } from "@primer/react";
import deepmerge from "deepmerge";
import React from "react";

const Atom = deepmerge(theme, {
  fonts: {
    normal:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
  },
});

const AtomOneLight = deepmerge(Atom, {
  colorSchemes: {
    light: {
      colors: {
        canvas: {
          default: "#FAFAFA",
        },
        fg: {
          default: "#383A42",
        },
        border: {
          default: "#DBDBDC",
        },
      },
    },
  },
});

const AtomOneDark = deepmerge(Atom, {
  colorSchemes: {
    dark: {
      colors: {
        canvas: {
          default: "#282C34",
        },
        fg: {
          default: "#ABB2BF",
        },
        border: {
          default: "#181A1F",
        },
      },
    },
  },
});

const PrimerProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={Atom} preventSSRMismatch>
      <BaseStyles>{children}</BaseStyles>
    </ThemeProvider>
  );
};
export default PrimerProvider;
