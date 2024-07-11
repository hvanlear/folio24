import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Figtree } from "next/font/google";
import "./globals.css";
import ClientLayout from "../components/layout/ClientLayout";

const figtree = Figtree({ subsets: ["latin"] });

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
      <body className={figtree.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
