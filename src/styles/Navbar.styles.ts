"use client";

import Link from "next/link";
import styled from "styled-components";

export const Navbar = styled.header`
  background: rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(15px);
  height: 5.5rem;
  position: fixed;
  z-index: 500;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Separator = styled.div`
  width: 0.0625rem;
  height: 1.5rem;
  opacity: 0.25;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  background: #99f3f5;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 0.9375em;
  font-style: normal;
  font-weight: 500;
  line-height: 105%;
`;

export const NavbarWrapper = styled.nav`
  margin-right: 7rem;
  margin-left: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1400px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;

export const Navigation = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 1400px) {
    display: none;
  }
`;

export const MobileNavigation = styled.div<{ $open: boolean }>`
  display: ${(props) => (props.$open ? "block" : "none")};
  position: fixed;
  background: #5f41d9;
  inset: 0 0 0 30%;
  height: 100dvh;
  z-index: 1000;
`;

export const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 2rem;
  font-size: 2rem;
  margin: 0 2.5rem;
  padding: 0;
`;

export const MobileSelect = styled.select`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
`;
