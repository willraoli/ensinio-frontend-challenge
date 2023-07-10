import hamburgerIcon from "@/assets/icons/hamburger.svg";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

export default function Hamburger() {
  const [open, setOpen] = useState(false);

  return (
    <HamburgerMenu>
      <Image src={hamburgerIcon} alt="Hamburger icon" />
    </HamburgerMenu>
  );
}

export const HamburgerMenu = styled.div`
  &:hover {
    cursor: pointer;
  }

  @media (min-width: 1400px) {
    display: none;
  }
`;
