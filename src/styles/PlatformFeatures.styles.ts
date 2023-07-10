import Link from "next/link";
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  gap: 9.5rem;
  margin-top: 4.2rem;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 5rem;
  }
`;

export const Container = styled.section`
  background-color: #fff;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6rem 7rem;

  @media (max-width: 900px) {
    margin: 6rem 2rem;
  }
`;

export const Overline = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OverlineTextLeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const OverlineTextLeft = styled.div`
  color: #432e98;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 105%;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
`;

export const OverlineTextRight = styled.div`
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: #423d51;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const OverlineDecoration = styled.div`
  width: 2.5rem;
  height: 0.0625rem;
  opacity: 0.5;
  background: #5f41d9;
`;

export const Heading = styled.h2`
  color: #130c25;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 0.01rem;

  @media (max-width: 900px) {
    text-align: center;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  color: #423d51;
  margin-top: 6.5rem;
`;

export const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const FooterLink = styled(Link)`
  color: #5f41d9;
  text-decoration: none;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 125%;
  display: flex;
  align-items: center;
  gap: 2rem;
`;
