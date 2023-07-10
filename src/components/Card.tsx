import { Feature, Translation } from "@/types/Feature";
import Image from "next/image";
import styled from "styled-components";

interface CardProps {
  data: Feature;
  locale: keyof Translation;
  img: string;
}

export default function Card({ data, locale, img }: CardProps) {
  return (
    <Container>
      <Image src={img} alt="Card image" />
      <Title>{data.title[locale]}</Title>
      <Description>{data.description[locale]}</Description>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

export const Title = styled.h4`
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 125%;
  letter-spacing: 0.00625rem;
  color: #130c25;
`;

export const Description = styled.article`
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: #423d51;

  @media (max-width: 900px) {
    text-align: center;
  }
`;
