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
  ...rest
}) => {
  return <S.Button onClick={onClick}>{text}</S.Button>;
};
