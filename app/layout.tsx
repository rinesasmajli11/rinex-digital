import type { Metadata } from "next";
import { Inter, Syne, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Rinex Digital | Build Powerful Digital Experiences",
  description: "Rinex Digital helps businesses grow through modern websites, powerful user experiences, and data-driven digital marketing strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${syne.variable} ${outfit.variable} font-sans antialiased bg-[#0b0f2a] text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
