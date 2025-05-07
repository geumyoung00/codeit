import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../styles/globals.css';
import { Gnb } from '@/components/Headers/Headers';

const NanumSquare = localFont({
  src: [
    {
      path: '../../public/fonts/NanumSquareR.woff',
      weight: '400',
    },
    {
      path: '../../public/fonts/NanumSquareB.woff',
      weight: '700',
    },
    {
      path: '../../public/fonts/NanumSquareEB.woff',
      weight: '800',
    },
  ],
  display: 'swap',
  variable: '--font-NanumSquare',
});

export const metadata: Metadata = {
  title: 'DO IT && code it',
  description: 'todo list by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={`${NanumSquare.variable}  antialiased`}>
        <Gnb />
        {children}
      </body>
    </html>
  );
}
