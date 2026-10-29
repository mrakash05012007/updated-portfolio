import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Akash Srinivasan — AI & Data Science Engineer',
  description:
    'Portfolio of Akash Srinivasan — AI & Data Science engineering student specialising in Machine Learning, Computer Vision, Generative AI, and intelligent software applications.',
  keywords: [
    'Akash Srinivasan',
    'AI Engineer',
    'Data Science',
    'Machine Learning',
    'Computer Vision',
    'Generative AI',
    'LLM',
    'RAG',
    'Portfolio',
    'Chennai',
  ],
  authors: [{ name: 'Akash Srinivasan' }],
  openGraph: {
    title: 'Akash Srinivasan — AI & Data Science Engineer',
    description:
      'AI & Data Science engineering student exploring Machine Learning, Computer Vision, Generative AI, and intelligent software applications.',
    type: 'website',
    siteName: 'Akash Srinivasan Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akash Srinivasan — AI & Data Science Engineer',
    description:
      'AI & Data Science engineering student exploring ML, CV, GenAI, and intelligent software applications.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className="antialiased bg-[#080E1C] text-slate-100 font-sans selection:bg-cyan-500/25 selection:text-white">{children}</body>
    </html>
  );
}
