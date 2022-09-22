import React from "react";
import * as S from "./BookgridContainer.styles";
import { BookCard } from "../BookCard/BookCard";
import { Bookmark } from "../Bookmark/Bookmark";

export const BookgridContainer = (bookCard) => {
  return (
    <S.BookGridWrapper>
      <Bookmark text="Nyinkomna böcker" color="#FEB28C" />
      <S.BookGrid>
        {bookCard.bookCard.map((book) => {
          return <BookCard book={book} key={1} />;
        })}
      </S.BookGrid>
    </S.BookGridWrapper>
  );
};
