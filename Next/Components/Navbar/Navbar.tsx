import React from "react";
import * as S from "./Navbar.styles";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <S.Nav>
      <S.NavWrapper>
        <S.NavText>
          Majornas <br />
          Böcker & Kaffe
        </S.NavText>
        <S.ImageWrapper>
          <Image
            src="/Icons/Mobile-menu.svg"
            alt="menu-icon"
            width={43}
            height={40}
          />
        </S.ImageWrapper>
        <S.NavMenu>
          <Link href="/">
            <a>Nyheter</a>
          </Link>
          <Link href="/event">
            <a>Event</a>
          </Link>
          <Link href="/om-oss">
            <a>Om butiken</a>
          </Link>
        </S.NavMenu>
      </S.NavWrapper>
    </S.Nav>
  );
};
