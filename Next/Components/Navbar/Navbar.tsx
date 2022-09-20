import React, { useState } from "react";
import * as S from "./Navbar.styles";
import Image from "next/image";
import Link from "next/link";
import { NavbarProps } from "./Navbar.types";
import { OverlayMobileMenu } from "../OverlayMobileMenu/OverlayMobileMenu";

export const Navbar: React.FC<NavbarProps> = ({ onClick }) => {
  const [showOverlayMenu, setShowPopup] = useState(false);
  return (
    <S.Nav>
      <S.NavWrapper>
        <S.NavText>
          Majornas <br />
          Böcker & Kaffe
        </S.NavText>
        <S.ImageWrapper
          onClick={() => {
            setShowPopup(!showOverlayMenu);
          }}
        >
          <Image
            src="/Icons/Mobile-menu.svg"
            alt="menu-icon"
            width={43}
            height={40}
          />
        </S.ImageWrapper>
        {showOverlayMenu && (
          <OverlayMobileMenu
            onClick={() => {
              setShowPopup(!showOverlayMenu);
            }}
          />
        )}
        <S.NavMenu>
          <Link href="/">
            <a>Nyheter</a>
          </Link>
          <Link href="/event">
            <a>Event</a>
          </Link>
          <Link href="/about">
            <a>Om butiken</a>
          </Link>
        </S.NavMenu>
      </S.NavWrapper>
    </S.Nav>
  );
};
