import React, { useState } from "react";
import LogoGroup from "./LogoGroup";
import Hamburger from "./Hamburger";
import FullScreenMenu from "./FullScreenMenu";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;
  width: 100%;
  z-index: 3000;
  mix-blend-mode: difference;
`;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <HeaderContainer>
        <LogoGroup />
        <Hamburger isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </HeaderContainer>
      <FullScreenMenu isOpen={isMenuOpen} />
    </>
  );
}
