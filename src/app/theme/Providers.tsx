'use client';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { theme } from '@/theme';
import { recursive, outfit } from '@/fonts';

export default function Providers({ children }: React.PropsWithChildren) {
  return (
    <AppRouterCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={`${recursive.className} ${outfit.className}`}>
          {children}
        </div>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
