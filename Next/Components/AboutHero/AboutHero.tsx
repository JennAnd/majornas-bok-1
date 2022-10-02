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
          {/* <S.HeroText> {aboutInfo?.aboutStore}</S.HeroText> */}
          <S.HeroText>
            Majornas böcker & kaffe är en oberoende bokhandel som öppnade
            sommaren 2019. Här finner du aktuell skönlitteratur, barnböcker,
            serieböcker och intressanta fackböcker. Förutom böcker säljs också
            kort, pussel och spel samt en del pappersvaror och roliga presenter.
            På barnavdelningen hittar man förutom böcker småprylar som är
            perfekta som kalaspresenter.
            <br></br>
            <br></br>
            Tanken är att erbjuda en trivsam bokhandel där man kan botanisera
            bland böcker, eller slå sig ner med en espresso och dagstidningen.
            <br></br>
            <br></br>
            Stående erbjudande är valfri pocket + valfri kaffe = 100:-.
            <br></br>
            <br></br>
            Varmt välkommen!
          </S.HeroText>
        </S.HeroTextWrapper>
      </S.HeroWrapper>
    </S.Hero>
  );
};
