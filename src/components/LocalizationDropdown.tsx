import styled from "styled-components";
import Image from "next/image";
import brazilFlag from "@/assets/icons/brazil-flag.svg";
import spainFlag from "@/assets/icons/spain-flag.svg";
import usaFlag from "@/assets/icons/usa-flag.svg";

export default function LocalizationDropdown() {
  const LOCALE_LIST = [
    {
      label: "PT",
      icon: brazilFlag,
    },
    {
      label: "EN",
      icon: usaFlag,
    },
    {
      label: "ES",
      icon: spainFlag,
    },
  ];

  return (
    <DropdownMenu>
      {LOCALE_LIST.map((item, idx) => (
        <LocalizationItem key={idx}>
          <Image src={item.icon} alt={`${item.label} flag`} />
          {item.label}
        </LocalizationItem>
      ))}
    </DropdownMenu>
  );
}

export const LocalizationItem = styled.div`
  display: flex;
  align-items: center;
  color: #5a5566;
  background-color: #fff;
  gap: 0.5rem;
  padding: 1rem 1.5rem;

  &:hover {
    background: linear-gradient(90deg, #efecfb 0%, #fff 100%);
    cursor: pointer;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  border-radius: 0.5rem;
  overflow: hidden;
`;
