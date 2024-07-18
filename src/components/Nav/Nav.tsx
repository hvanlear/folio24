import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LogoGroup from "./LogoGroup";
import Hamburger from "./Hamburger";
import FullScreenMenu from "./FullscreenMenu/FullScreenMenu";
import styled from "styled-components";

//tailwind couldn't accommodate this styling therefore styled comps

const NavContainer = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem 0 2rem;
  width: 100%;
  z-index: 3000;
  mix-blend-mode: difference;
`;

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <NavContainer>
        <LogoGroup />
        <Hamburger isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </NavContainer>
      <FullScreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
