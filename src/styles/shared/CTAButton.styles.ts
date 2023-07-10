import Link from "next/link";
import styled from "styled-components";

export const Button = styled(Link)`
  border-radius: 5rem;
  background: #00e1e7;
  padding: 1.12rem 2rem;
  font-weight: 600;
  color: #130c25;
  text-decoration: none;
  text-align: center;

  @media (max-width: 1130px) {
    width: 60%;
    z-index: 3;
    bottom: 2rem;
    position: fixed;
  }
`;
