import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Albums',
  description: 'Gonna get this job',
  applicationName: 'Geek Up Technical Test',
  icons: [
    { rel: "icon", type: "image/png", url: "/logo/geek-up_logo.png" } 
  ],
  generator: 'khoadev',
  authors: [{ name: 'khoadev' }],
  creator: 'khoadev',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
