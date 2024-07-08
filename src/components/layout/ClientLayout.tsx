"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";
import Header from "@/src/components/Header/Header";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AnimatePresence mode="wait">
        <Header />
        {children}
      </AnimatePresence>
    </>
  );
}
