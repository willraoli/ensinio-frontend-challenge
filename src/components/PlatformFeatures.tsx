import { Feature } from "@/types/Feature";
import * as S from "@/styles/PlatformFeatures.styles";
import Card from "@/components/Card";
import iconPlaylists from "@/assets/icons/icon-playlists.svg";
import iconTrilhas from "@/assets/icons/icon-trilhas.svg";
import iconFolder from "@/assets/icons/icon-folder.svg";
import iconRightArrow from "@/assets/icons/arrow-right.svg";
import iconRocket from "@/assets/icons/icon-rocket.svg";
import Image from "next/image";
import axios from "axios";

const getData = async () => {
  const res = await axios.get<Feature[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/items`
  );
  return res.data;
};

export default async function PlatformFeatures() {
  const data = await getData();
  const icons = [iconTrilhas, iconPlaylists, iconFolder];

  return (
    <S.Container>
      <S.Wrapper>
        <S.Overline>
          <S.OverlineTextLeftWrapper>
            <S.OverlineDecoration />
            <S.OverlineTextLeft>Pensamos em cada detalhe</S.OverlineTextLeft>
          </S.OverlineTextLeftWrapper>
          <S.OverlineTextRight>
            Conheça alguns dos nossos recursos ⚡️
          </S.OverlineTextRight>
        </S.Overline>
        <S.Heading>
          Queremos que o aluno se sinta confortável enquanto aprende
        </S.Heading>
        <S.CardContainer>
          {data.length > 0 &&
            data.map((feature, idx) => (
              <Card
                key={idx}
                data={feature}
                locale="pt"
                // HACK: idealmente o link da imagem estaria na própria resposta da API
                img={icons[feature.id - 1]}
              />
            ))}
        </S.CardContainer>
        <S.Footer>
          <S.FooterLeft>
            <Image src={iconRocket} alt="Rocket icon" />
            Veja todos os outros recursos disponíveis para te ajudar
          </S.FooterLeft>
          <S.FooterLink href="/">
            Ver mais
            <Image src={iconRightArrow} alt="Right arrow icon" />
          </S.FooterLink>
        </S.Footer>
      </S.Wrapper>
    </S.Container>
  );
}
