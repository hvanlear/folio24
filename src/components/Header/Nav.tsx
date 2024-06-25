"use client";

import Logo from "@/src/assets/Logo";
import styled from "styled-components";

const BlendedSpan = styled.span`
  mix-blend-mode: difference;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  color: white;
  z-index: 1000;
  width: 100%;
  top: 10%;
  padding-right: 1rem;
`;
export default function Nav() {
  return (
    <BlendedSpan>
      <Logo />
    </BlendedSpan>
  );
}
