import React from "react";
import * as S from "./Button.styles";
import { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps> = ({
  text,
  href,
  className,
  onClick,
  children,
  alt,
  ref,
  width,
  height,
  padding,
  margin,
  fontSize,
  ...rest
}) => {
  return (
    <S.Button
      style={{
        width: `${width}`,
        height: `${height}`,
        padding: `${padding}`,
        margin: `${margin}`,
        fontSize: `${fontSize}`,
      }}
      onClick={onClick}
    >
      {text}
    </S.Button>
  );
};
