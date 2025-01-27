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
  title: "gleb",
  description: "gleb | portfolio",
  openGraph: {
    title: "gleb",
    description: "gleb | portfolio",
    images: [
      {
        url: "/placeholder.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "gleb",
    description: "gleb | portfolio",
    images: ["/placeholder.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
