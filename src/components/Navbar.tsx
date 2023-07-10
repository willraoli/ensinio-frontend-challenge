import HoverLink from "@/components/shared/HoverLink";
import logo from "@/assets/logo.svg";
import user from "@/assets/icons/user.svg";
import Image from "next/image";
import * as S from "@/styles/Navbar.styles";
import Link from "next/link";
import LinkButton from "@/components/shared/LinkButton";
import SolutionsDropdown from "@/components/SolutionsDropddown";
import LocalizationDropdown from "@/components/LocalizationDropdown";
import Hamburger from "@/components/Hamburger";

export default function Navbar() {
  const NAV_ITEMS = [
    {
      label: "Preços",
      href: "/",
    },
    {
      label: "Academy",
      href: "/",
    },
    {
      label: "Blog",
      href: "/",
    },
    {
      label: "Contato",
      href: "/",
    },
  ];

  return (
    <S.Navbar>
      <S.NavbarWrapper>
        <Link href="/">
          <Image src={logo} alt="Logo da página" />
        </Link>
        <S.Navigation>
          <HoverLink icon showOnHover={<SolutionsDropdown />}>
            Soluções
          </HoverLink>
          {NAV_ITEMS.map((item, idx) => (
            <S.NavLink href={item.href} key={idx}>
              {item.label}
            </S.NavLink>
          ))}
          <S.Separator />
          <LinkButton href="/" icon={user}>
            Entrar
          </LinkButton>
          <LinkButton href="/" $variant="outlined">
            Começar agora
          </LinkButton>
          <HoverLink icon showOnHover={<LocalizationDropdown />}>
            PT
          </HoverLink>
        </S.Navigation>
        <Hamburger />
      </S.NavbarWrapper>
    </S.Navbar>
  );
}
