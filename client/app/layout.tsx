import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Oswald } from "@next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400','700'],
})

export const metadata: Metadata = {
  title: "Yeetcode",
  description: "Interactive community-based coding challenges site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
