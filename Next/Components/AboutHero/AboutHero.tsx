import React from "react";
import * as S from "./AboutHero.styles";
import Image from "next/image";

export const AboutHero = ({ aboutInfo }) => {
  return (
    <S.Hero>
      <S.HeroWrapper>
        <S.ImageHeroWrapperMobile>
          <Image
            src="/Images/AboutHero/Bookshelf-mobile.webp"
            alt="bookshelf"
            width={500}
            height={745}
          />
        </S.ImageHeroWrapperMobile>
        <S.ImageHeroWrapperDesktop>
          <Image
            src="/Images/AboutHero/Bookshelf-desktop.webp"
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
