import appIcon from "@/assets/icons/app.svg";
import eadIcon from "@/assets/icons/ead.svg";
import gamificationIcon from "@/assets/icons/gamification.svg";
import socialIcon from "@/assets/icons/social.svg";
import * as S from "@/styles/SolutionsDropdown.styles";
import Image from "next/image";

export default function SolutionsDropdown() {
  const GRID_ITEMS = [
    {
      title: "Crie uma Escola Online",
      description: "Lorem ipsum dolor sit amet",
      icon: eadIcon,
      href: "/",
    },
    {
      title: "Gamificação",
      description: "Lorem ipsum dolor sit amet",
      icon: gamificationIcon,
      href: "/",
    },
    {
      title: "Comunidade e rede social",
      description: "Lorem ipsum dolor sit amet",
      icon: socialIcon,
      href: "/",
    },
    {
      title: "Aplicativo mobile",
      description: "Lorem ipsum dolor sit amet",
      icon: appIcon,
      href: "/",
    },
  ];

  return (
    <S.DropdownMenu>
      <S.SolutionsHeading>soluções principais</S.SolutionsHeading>
      <S.Grid>
        {GRID_ITEMS.map((item, idx) => (
          <S.GridItem key={idx} href={item.href}>
            <Image src={item.icon} alt="Icon" />
            <div>
              <S.GridItemTitle>{item.title}</S.GridItemTitle>
              <S.GridItemDescription>{item.description}</S.GridItemDescription>
            </div>
          </S.GridItem>
        ))}
      </S.Grid>
    </S.DropdownMenu>
  );
}
