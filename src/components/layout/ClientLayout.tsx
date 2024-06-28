"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";
import LogoGroup from "@/src/components/Header/LogoGroup";
import HamburgerMenu from "@/src/components/ui/Hamburger";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AnimatePresence mode="wait">
        <LogoGroup />
        <HamburgerMenu />
        {children}
      </AnimatePresence>
    </>
  );
}
