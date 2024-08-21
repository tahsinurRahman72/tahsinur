import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from '@next/font/local'

const inter = Inter({ subsets: ["latin"] });

const kaushan = localFont({
  src: [
    {
      path: '../../public/fonts/KaushanScript-Regular.ttf',
      weight: '400'
    }
  ],
  variable: '--font-kaushan'
})

export const metadata: Metadata = {
  title: "Tahsinur Rahman",
  description: "Just Another Portfolio Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${kaushan.variable} font-sans`}>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
