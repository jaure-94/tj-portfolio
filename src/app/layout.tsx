import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Ovo } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TJ The Developer",
  description: "Tawanda Jaure Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${outfit.className}
          ${ovo.className}
          antialiased
          bg-stone-200
          text-stone-900
        `}
      >
        {children}
      </body>
    </html>
  );
}
