import React from "react";
import * as S from "./Bookgrid.styles";
import Image from "next/image";

export const Bookgrid = ({ book }) => {
  return (
    <S.Bookdiv>
      <Image src={book?.imageUrl} alt={book?.title} width={380} height={480} />
      <S.BookName>{book?.title}</S.BookName>
      <S.AuthorName>{book?.author}</S.AuthorName>
    </S.Bookdiv>
  );
};
