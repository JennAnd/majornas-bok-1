import React from "react";
import * as S from "./AboutHero.styles";
import Image from "next/image";

export const AboutHero = () => {
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
          <S.HeroText>
            Anna startade Majornas Böcker och Kaffe år 2019 som en samlingsplats
            för den lässugne, romantikern, och passionerade.
            <br />
            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
            dignissim, metus nec fringilla accumsan, risus sem sollicitudin
            lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum
            velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Praesent
            auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
          </S.HeroText>
        </S.HeroTextWrapper>
      </S.HeroWrapper>
    </S.Hero>
  );
};
