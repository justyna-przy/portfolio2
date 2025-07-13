import Providers from '@/app/theme/Providers';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'My Portfolio' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute="class" defaultMode="dark" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
