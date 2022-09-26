import React from "react";
import * as S from "./Bookmark.styles";
import { BookmarkProps } from "./Bookmark.types";

export const Bookmark: React.FC<BookmarkProps> = ({
  onClick,
  text,
  color,
  backgroundColor,
  width,
  margin,
}) => {
  return (
    <S.BookmarkWrapper
      style={{
        backgroundColor: `${backgroundColor}`,
      }}
    >
      <S.BookmarkContainer
        style={{
          width: `${width}`,
          margin: `${margin}`,
        }}
        onClick={onClick}
        color={color}
      >
        {text}
      </S.BookmarkContainer>
    </S.BookmarkWrapper>
  );
};
