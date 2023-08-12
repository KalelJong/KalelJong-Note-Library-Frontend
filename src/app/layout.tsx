import { AuthProvider } from "@/contexts/auth.context";
import { GeneralProvider } from "@/contexts/general.context";
import { ValidationProvider } from "@/contexts/validation.context";
import "@primer/css/index.scss";
import "@primer/react-brand/lib/css/main.css";
import { Metadata } from "next";
import PrimerProvider from "../providers/PrimerProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Note Library',
  description: 'A space to store your notes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <AuthProvider>
            <ValidationProvider>
              <GeneralProvider>
              <PrimerProvider>{children}</PrimerProvider>
            </GeneralProvider>
          </ValidationProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
