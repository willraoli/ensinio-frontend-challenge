import * as S from "@/styles/shared/CTAButton.styles";

interface CTAButtonProps extends React.PropsWithChildren {
  href: string;
}

export default function CTAButton({ children, href }: CTAButtonProps) {
  return <S.Button href={href}>{children}</S.Button>;
}
