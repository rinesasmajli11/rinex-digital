import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
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
        className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased bg-[#0b0f2a] text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
