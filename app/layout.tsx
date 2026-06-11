import type { Metadata } from "next";
import { Geist, Geist_Mono,Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const moonseraat = Montserrat({
  subsets: ["latin"],
  variable: "--font-moonseraat",
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProService - Business Solution Group",
  description: "ProService - Business Solution Group",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${moonseraat.variable} h-full antialiased`}
      suppressHydrationWarning = {true}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning = {true} >
          {children}
      </body>
    </html>
  );
}
