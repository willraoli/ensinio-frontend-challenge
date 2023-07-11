import hamburgerIcon from "@/assets/icons/hamburger.svg";
import closeIcon from "@/assets/icons/icon-x.svg";
import Image from "next/image";
import styled from "styled-components";

interface HamburgerProps {
  open: boolean;
  onClick: () => void;
}

export default function Hamburger({ open, onClick }: HamburgerProps) {
  return (
    <HamburgerMenu onClick={onClick}>
      {!open && <Image src={hamburgerIcon} alt="Hamburger button" />}
      {open && <Image src={closeIcon} alt="Close button" />}
    </HamburgerMenu>
  );
}

export const HamburgerMenu = styled.div`
  z-index: 1001;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 1400px) {
    display: none;
  }
`;
