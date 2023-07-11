import * as S from "@/styles/shared/LinkButton.styles";
import { LinkButtonVariantProps } from "@/styles/shared/LinkButton.styles";
import Image from "next/image";
import { PropsWithChildren } from "react";

interface LinkButtonProps extends PropsWithChildren, LinkButtonVariantProps {
  icon?: string;
  href: string;
}

export default function LinkButton({
  children,
  icon,
  href,
  $variant,
}: LinkButtonProps) {
  return (
    <S.LinkButton $variant={$variant} href={href}>
      {icon && <Image src={icon} alt="Icon" />}
      {children}
    </S.LinkButton>
  );
}
