import styled from "styled-components";
import personImg from "@/assets/images/dude.png";
import circleImg from "@/assets/doodles/circle.svg";
import dotsImg1 from "@/assets/doodles/dots.svg";
import dotsImg2 from "@/assets/doodles/dots-2.svg";
import Image from "next/image";

export default function HeroRight() {
  return (
    <Container>
      <Person src={personImg} alt="Person" />
      <Circle src={circleImg} alt="" />
      <Dots1 src={dotsImg1} alt="" />
      <Dots2 src={dotsImg2} alt="" />
    </Container>
  );
}

export const Container = styled.div`
  position: relative;
  margin-right: 7rem;

  @media (max-width: 1400px) {
    margin-right: 2rem;
  }

  @media (max-width: 1130px) {
    margin-right: 0;
    display: flex;
    justify-content: center;
  }
`;

export const Person = styled(Image)`
  position: absolute;
  right: 3.41rem;
  bottom: 0;
  z-index: 1;

  @media (max-width: 1130px) {
    position: static;
  }
`;

export const Circle = styled(Image)`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 0;

  @media (max-width: 1130px) {
    display: none;
  }
`;

export const Dots1 = styled(Image)`
  position: absolute;
  bottom: 5.38rem;
  right: 29.87rem;
  z-index: 0;

  @media (max-width: 1130px) {
    display: none;
  }
`;
export const Dots2 = styled(Image)`
  position: absolute;
  bottom: 15.31rem;
  right: 9.28rem;
  z-index: 0;

  @media (max-width: 1130px) {
    display: none;
  }
`;
