import React from "react";
import * as S from "./BookgridContainer.styles";
import { Bookgrid } from "../Bookgrid/Bookgrid";

export const BookgridContainer = (bookGrid) => {
  return (
    <S.BookWrapper>
      {bookGrid.bookGrid.map((book) => {
        return <Bookgrid book={book} key={1} />;
      })}
    </S.BookWrapper>
  );
};
