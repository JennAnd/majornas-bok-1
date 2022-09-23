import React from "react";
import * as S from "./Bookmark.styles";
import { BookmarkProps } from "./Bookmark.types";

export const Bookmark: React.FC<BookmarkProps> = ({
  onClick,
  text,
  color,
  width,
}) => {
  return (
    <S.BookmarkWrapper>
      <S.BookmarkContainer
        style={{
          width: `${width}`,
        }}
        onClick={onClick}
        color={color}
      >
        {text}
      </S.BookmarkContainer>

      {/* <S.BookmarkContainer
        style={{
          color: `${color}`,
          backgroundColor: `${backgroundColor}`,
        }}
        onClick={onClick}
      >
        {text}
      </S.BookmarkContainer> */}
    </S.BookmarkWrapper>
  );
};
