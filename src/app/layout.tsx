import { AuthProvider } from '@/contexts/auth.context';
import { GeneralProvider } from '@/contexts/general.context';
import { NoteCollectionProvider } from '@/contexts/note-collection.context';
import { NoteProvider } from '@/contexts/note.context';
import { ValidationProvider } from '@/contexts/validation.context';
import { Metadata } from 'next';
import PrimerProvider from '../providers/PrimerProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Note Library',
  description: 'A space to store your notes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-full">
      <body className="w-full h-full">
        <AuthProvider>
          <ValidationProvider>
            <GeneralProvider>
              <PrimerProvider>
                <NoteProvider>
                  <NoteCollectionProvider>{children}</NoteCollectionProvider>
                </NoteProvider>
              </PrimerProvider>
            </GeneralProvider>
          </ValidationProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
