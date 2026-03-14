import type { Metadata } from "next";
import { Figtree, Playfair_Display } from "next/font/google";
import "./globals.css";
import ClientLayout from "../components/layout/ClientLayout";
import React from "react";

const figtree = Figtree({ subsets: ["latin"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Hunter Van Lear",
  description: "The personal portfolio of Hunter Van Lear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.className} ${playfair.variable}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
