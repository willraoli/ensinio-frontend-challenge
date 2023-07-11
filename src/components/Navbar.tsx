import user from "@/assets/icons/user.svg";
import logo from "@/assets/logo.svg";
import Hamburger from "@/components/Hamburger";
import LocalizationDropdown from "@/components/LocalizationDropdown";
import SolutionsDropdown from "@/components/SolutionsDropddown";
import HoverLink from "@/components/shared/HoverLink";
import LinkButton from "@/components/shared/LinkButton";
import * as S from "@/styles/Navbar.styles";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <S.Navbar>
      <S.NavbarWrapper>
        <Link href="/">
          <Image src={logo} alt="Logo da página" />
        </Link>
        <S.Navigation>
          <HoverLink showOnHover={<SolutionsDropdown />}>Soluções</HoverLink>
          <S.NavLink href="/">Preços</S.NavLink>
          <S.NavLink href="/">Academy</S.NavLink>
          <S.NavLink href="/">Blog</S.NavLink>
          <S.NavLink href="/">Contato</S.NavLink>
          <S.Separator />
          <LinkButton href="/" icon={user}>
            Entrar
          </LinkButton>
          <LinkButton href="/" $variant="outlined">
            Começar agora
          </LinkButton>
          <HoverLink showOnHover={<LocalizationDropdown />}>PT</HoverLink>
        </S.Navigation>
        <S.MobileNavigation $open={open}>
          <S.MobileNavList>
            <S.NavLink href={"/"}>Preços</S.NavLink>
            <S.NavLink href={"/"}>Academy</S.NavLink>
            <S.NavLink href={"/"}>Blog</S.NavLink>
            <S.NavLink href={"/"}>Contato</S.NavLink>
            <S.MobileSelect>
              <option value="1">PT</option>
              <option value="2">EN</option>
              <option value="3">ES</option>
            </S.MobileSelect>
            <LinkButton href="/" icon={user}>
              Entrar
            </LinkButton>
          </S.MobileNavList>
        </S.MobileNavigation>
        <Hamburger open={open} onClick={() => setOpen(!open)} />
      </S.NavbarWrapper>
    </S.Navbar>
  );
}
