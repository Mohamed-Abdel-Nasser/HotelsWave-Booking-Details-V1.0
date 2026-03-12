import type {Metadata} from 'next';
import {Cairo} from 'next/font/google';
import './globals.css';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'تفاصيل الحجز',
  description: 'Booking Details View',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-sans bg-gray-100 text-[#1a1a1a] antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
