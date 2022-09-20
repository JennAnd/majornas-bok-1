import React from "react";
import * as S from "./OverlayMobileMenu.styles";
import Image from "next/image";
import Link from "next/link";

export const OverlayMobileMenu = () => {
  return (
    <S.OverlayMenuWrapper>
      <S.IconWrapper>
        <Image
          src="/Icons/MenuClose.svg"
          alt="menu-icon"
          width={16}
          height={16}
        />
      </S.IconWrapper>
      <S.HeaderText>
        Majornas <br />
        Böcker & Kaffe
      </S.HeaderText>

      <S.MenuTextWrapper>
        <Link href="/">
          <a>NYHETER</a>
        </Link>
        <Link href="/">
          <a>EVENT</a>
        </Link>
        <Link href="/about">
          <a>OM BUTIKEN</a>
        </Link>
      </S.MenuTextWrapper>
    </S.OverlayMenuWrapper>
  );
};
