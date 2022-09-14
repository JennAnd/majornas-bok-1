import React from "react";
import * as S from "./Bookgrid.styles";
import Image from "next/image";

export const Bookgrid = () => {
  return (
    <S.BookWrapper>
      {/* Här vill jag loopa ut x max 6 för att få ut alla böcker och namn, */}
      <S.Bookdiv>
        <Image src="/Images/Test/ASTROLOGI.webp" width={380} height={480} />
        <S.BookName>Boktitel</S.BookName>
        <S.AuthorName>Författarnamn</S.AuthorName>
      </S.Bookdiv>
      <S.Bookdiv>
        <Image src="/Images/Test/ASTROLOGI.webp" width={380} height={480} />
        <S.BookName>Boktitel</S.BookName>
        <S.AuthorName>Författarnamn</S.AuthorName>
      </S.Bookdiv>
      <S.Bookdiv>
        <Image src="/Images/Test/ASTROLOGI.webp" width={380} height={480} />
        <S.BookName>Boktitel</S.BookName>
        <S.AuthorName>Författarnamn</S.AuthorName>
      </S.Bookdiv>
      <S.Bookdiv>
        <Image src="/Images/Test/ASTROLOGI.webp" width={380} height={480} />
        <S.BookName>Boktitel</S.BookName>
        <S.AuthorName>Författarnamn</S.AuthorName>
      </S.Bookdiv>
      <S.Bookdiv>
        <S.ImgContainer>
          <Image src="/Images/Test/ASTROLOGI.webp" width={380} height={480} />
        </S.ImgContainer>
        <S.BookName>Boktitel</S.BookName>
        <S.AuthorName>Författarnamn</S.AuthorName>
      </S.Bookdiv>
      <S.Bookdiv>
        <Image src="/Images/Test/ASTROLOGI.webp" width={380} height={480} />
        <S.BookName>Boktitel</S.BookName>
        <S.AuthorName>Författarnamn</S.AuthorName>
      </S.Bookdiv>
    </S.BookWrapper>
  );
};
