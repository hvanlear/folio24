"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";
import Nav from "@/src/components/Nav/Nav";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <AnimatePresence mode="sync">{children}</AnimatePresence>
    </>
  );
}
