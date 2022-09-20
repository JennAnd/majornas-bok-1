import React from "react";
import { TextProps } from "./Text.types";
import * as S from "./Text.styles";

export const Text: React.FC<TextProps> = ({
  text,
  width,
  height,
  padding,
  margin,
  color,
  fontSize,
  fontFamily,
  onClick,
}) => {
  return (
    <S.Text
      style={{
        width: `${width}`,
        height: `${height}`,
        padding: `${padding}`,
        margin: `${margin}`,
        fontSize: `${fontSize}`,
        fontFamily: `${fontFamily}`,
        color: `${color}`,
      }}
      onClick={onClick}
    >
      {text}
    </S.Text>
  );
};
