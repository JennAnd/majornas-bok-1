import React, { useState } from "react";
import * as S from "./OverlayMobileMenu.styles";
import Image from "next/image";
import Link from "next/link";
import { OverlayMobileMenuProps } from "./OverlayMobileMenu.types";

export const OverlayMobileMenu: React.FC<OverlayMobileMenuProps> = ({
  onClick,
}) => {
  return (
    <S.OverlayMenuWrapper>
      <S.IconWrapper onClick={onClick}>
        <Image src="/Icons/MenuClose.svg" alt="close" width={16} height={16} />
      </S.IconWrapper>
      <S.HeaderText>
        Majornas <br />
        Böcker & Kaffe
      </S.HeaderText>

      <S.MenuTextWrapper>
        <Link href="/">
          <a>NYHETER</a>
        </Link>
        <Link href="/event">
          <a>EVENT</a>
        </Link>
        <Link href="/about">
          <a>OM BUTIKEN</a>
        </Link>
      </S.MenuTextWrapper>
    </S.OverlayMenuWrapper>
  );
};
