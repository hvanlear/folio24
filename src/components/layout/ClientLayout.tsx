"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";
// import LogoGroup from "@/src/components/Header/LogoGroup";
// import HamburgerMenu from "@/src/components/Header/Hamburger";
import Header from "@/src/components/Header/Header";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AnimatePresence mode="wait">
        {/* <LogoGroup />
        <HamburgerMenu /> */}
        <Header />
        {children}
      </AnimatePresence>
    </>
  );
}
