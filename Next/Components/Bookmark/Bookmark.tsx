import React from "react";
import * as S from "./Bookmark.styles";
import { BookmarkProps } from "./Bookmark.types";

export const Bookmark: React.FC<BookmarkProps> = ({
  onClick,
  text,
  backgroundColor,
  color,
}) => {
  return (
    <S.BookmarkWrapper>
      <S.BookmarkContainer
        style={{
          color: `${color}`,
          backgroundColor: `${backgroundColor}`,
        }}
        onClick={onClick}
      >
        {text}
      </S.BookmarkContainer>
    </S.BookmarkWrapper>
  );
};
