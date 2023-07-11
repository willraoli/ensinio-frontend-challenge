import musicAudioDevices from "@/assets/icons/music-audio-devices.svg";
import musicAudioPlay from "@/assets/icons/music-audio-play.svg";
import HeroRight from "@/components/HeroRight";
import CTAButton from "@/components/shared/CTAButton";
import LinkButton from "@/components/shared/LinkButton";
import * as S from "@/styles/Hero.styles";
import Image from "next/image";

export default function Hero() {
  return (
    <S.HeroContainer>
      <S.HeroLeft>
        <S.PlatformOverline>
          <Image src={musicAudioDevices} alt="" />
          Plataforma All In One
        </S.PlatformOverline>
        <S.Heading>Sua escola online poderosa e lucrativa</S.Heading>
        <S.Subheading>
          Tenha sua própria escola online 100% white label com rede social,
          gamificação, clube de assinaturas, ecommerce e sistema EAD completo.
        </S.Subheading>
        <S.ButtonsContainer>
          <CTAButton href="/">Começar agora</CTAButton>
          <LinkButton href="/" icon={musicAudioPlay}>
            Ver vídeo
          </LinkButton>
        </S.ButtonsContainer>
      </S.HeroLeft>
      <HeroRight />
    </S.HeroContainer>
  );
}
