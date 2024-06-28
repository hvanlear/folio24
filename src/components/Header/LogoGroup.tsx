"use client";

import Logo from "@/src/assets/Logo";
import HamburgerMenu from "@/src/components/ui/Hamburger";
import styled from "styled-components";

const BlendedSpan = styled.span`
  mix-blend-mode: difference;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  color: white;
  z-index: 1000;
  width: 100%;
  padding-right: 1rem;
`;
export default function LogoGroup() {
  return (
    <>
      <BlendedSpan>
        <Logo />
      </BlendedSpan>
    </>
  );
}
