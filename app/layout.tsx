import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';
import { SiteShell } from '@/components/site-shell';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
export const metadata: Metadata = { title: 'Levelfolio — Premium Portfolio Progression System', description: 'Portfolio profesional berbasis career progression untuk digital professional.' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="id" suppressHydrationWarning><body className={geist.variable}><Providers><SiteShell>{children}</SiteShell></Providers></body></html>;
}
