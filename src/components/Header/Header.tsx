import LogoGroup from "./LogoGroup";
import Hamburger from "./Hamburger";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;
  z-index: 3000;
  width: 100%;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <LogoGroup />
      <Hamburger />
    </HeaderContainer>
  );
}
