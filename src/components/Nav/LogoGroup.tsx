"use client";

import Logo from "@/src/assets/Logo";
import styled from "styled-components";

const BlendedDiv = styled.div`
  mix-blend-mode: difference;
  z-index: 50;
`;
export default function LogoGroup() {
  return (
    <>
      <BlendedDiv>
        <Logo />
      </BlendedDiv>
    </>
  );
}
