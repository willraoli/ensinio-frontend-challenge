import downIcon from "@/assets/icons/down.svg";
import * as S from "@/styles/shared/HoverLink.styles";
import Image from "next/image";
import { PropsWithChildren, useState } from "react";

interface HoverLinkProps extends PropsWithChildren {
  icon?: boolean;
  showOnHover: React.ReactNode;
}

export default function HoverLink(props: HoverLinkProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.HoverLinkContainer
      onMouseOverCapture={() => setIsOpen(true)}
      onMouseOutCapture={() => setIsOpen(false)}
    >
      <S.HoverLink href="/">
        {props.children}
        {props.icon && <Image src={downIcon} alt="Down arrow" />}
      </S.HoverLink>
      {isOpen && props.showOnHover}
    </S.HoverLinkContainer>
  );
}
