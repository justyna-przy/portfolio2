import { Recursive, Outfit } from 'next/font/google';

export const recursive = Recursive({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-recursive',
});

export const outfit = Outfit({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-outfit',
});
