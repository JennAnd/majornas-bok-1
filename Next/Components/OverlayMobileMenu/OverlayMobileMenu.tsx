/* import React, { useState } from "react"; */
import * as S from "./OverlayMobileMenu.styles";
import Image from "next/image";
import Link from "next/link";
import { OverlayMobileMenuProps } from "./OverlayMobileMenu.types";
import { useRouter } from "next/router";

export const OverlayMobileMenu: React.FC<OverlayMobileMenuProps> = ({
  onClick,
}) => {
  const router = useRouter();
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
        <S.LinkWrapper active={router.asPath === "/start"}>
          <Link href="/start">
            <a>NYHETER</a>
          </Link>
        </S.LinkWrapper>
        <S.LinkWrapper active={router.asPath === "/event"}>
          <Link href="/event">
            <a>EVENT</a>
          </Link>
        </S.LinkWrapper>
        <S.LinkWrapper active={router.asPath === "/om-oss"}>
          <Link href="/om-oss">
            <a>OM BUTIKEN</a>
          </Link>
        </S.LinkWrapper>
      </S.MenuTextWrapper>
    </S.OverlayMenuWrapper>
  );
};
