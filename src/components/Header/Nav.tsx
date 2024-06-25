"use client";

import Logo from "@/src/assets/Logo";
import styled from "styled-components";

const BlendedLogo = styled(Logo)`
  mix-blend-mode: difference;
  filter: invert(1);

  path,
  rect {
    fill: white;
  }
`;

export default function Nav() {
  return (
    <span className="fixed top-0 z-50">
      <BlendedLogo />
    </span>
  );
}
