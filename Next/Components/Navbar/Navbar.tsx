import React, { useState } from "react";
import * as S from "./Navbar.styles";
import Image from "next/image";
import Link from "next/link";
import { NavbarProps } from "./Navbar.types";
import { OverlayMobileMenu } from "../OverlayMobileMenu/OverlayMobileMenu";
import { useRouter } from "next/router";

export const Navbar: React.FC<NavbarProps> = ({ onClick }) => {
  const [showOverlayMenu, setShowPopup] = useState(false);
  const router = useRouter();
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
          <S.LinkWrapper active={router.asPath === "/start"}>
            <Link href="/start">
              <a>Nyheter</a>
            </Link>
          </S.LinkWrapper>
          <S.LinkWrapper active={router.asPath === "/event"}>
            <Link href="/event">
              <a>Event</a>
            </Link>
          </S.LinkWrapper>
          <S.LinkWrapper active={router.asPath === "/om-oss"}>
            <Link href="/om-oss">
              <a>Om butiken</a>
            </Link>
          </S.LinkWrapper>
        </S.NavMenu>
      </S.NavWrapper>
    </S.Nav>
  );
};
