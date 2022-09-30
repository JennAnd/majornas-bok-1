import React from "react";
import * as S from "./AboutHero.styles";
import Image from "next/image";
import { Bookmark } from "../Bookmark/Bookmark";

export const AboutHero = ({ aboutInfo }) => {
  return (
    <S.Hero>
      <S.bookmarkWrapper>
        <Bookmark text="Om butiken" color="#FEB28C" />
      </S.bookmarkWrapper>
      <S.HeroWrapper>
        <S.ImageHeroWrapperMobile>
          <Image
            src="/Images/AboutHero/mobile.png"
            alt="bookshelf"
            width={500}
            height={745}
          />
        </S.ImageHeroWrapperMobile>
        <S.ImageHeroWrapperDesktop>
          <Image
            src="/Images/AboutHero/desktop.png"
            alt="bookshelf"
            width={1512}
            height={694}
          />
        </S.ImageHeroWrapperDesktop>
        <S.HeroTextWrapper>
          <S.HeroText> {aboutInfo?.aboutStore}</S.HeroText>
        </S.HeroTextWrapper>
      </S.HeroWrapper>
    </S.Hero>
  );
};
