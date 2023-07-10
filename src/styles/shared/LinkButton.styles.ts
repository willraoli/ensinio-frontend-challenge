"use client";

import Link from "next/link";
import styled from "styled-components";

export interface LinkButtonVariantProps {
  $variant?: "outlined";
}

export const LinkButton = styled(Link)<LinkButtonVariantProps>`
  border-radius: 5rem;
  border: ${(props) =>
    props.$variant === "outlined" ? "1px solid #fff" : "none"};
  padding: ${(props) =>
    props.$variant === "outlined" ? "0.75rem 1.5rem" : "none"};
  font-weight: 600;
  color: #fff;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  text-decoration: none;
  justify-content: center;

  @media (max-width: 1130px) {
    display: none;
  }
`;
