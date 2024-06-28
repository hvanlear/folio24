"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";
import HamburgerMenu from "@/src/components/ui/Hamburger";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HamburgerMenu />
      <AnimatePresence mode="wait">{children}</AnimatePresence>
    </>
  );
}
