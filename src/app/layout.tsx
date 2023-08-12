import "@primer/css/index.scss";
import "@primer/react-brand/lib/css/main.css";
import "./globals.css";


import { Metadata } from "next";
import React from "react";
import PrimerProvider from "../providers/PrimerProvider";

export const metadata: Metadata = {
  title: 'Note Library',
  description: 'A space to store your notes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <PrimerProvider>{children}</PrimerProvider>
    </html>
  )
}
