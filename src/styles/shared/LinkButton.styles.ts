"use client";

import Link from "next/link";
import styled from "styled-components";

export interface LinkButtonVariantProps {
  $variant?: "outlined";
}

export const LinkButton = styled(Link)<LinkButtonVariantProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 5rem;
  border: ${(props) =>
    props.$variant === "outlined" ? "1px solid #fff" : "none"};
  padding: ${(props) =>
    props.$variant === "outlined" ? "0.75rem 1.5rem" : "none"};
  font-weight: 600;
  color: #fff;
  text-decoration: none;
`;
