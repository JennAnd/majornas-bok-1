import { MouseEventHandler } from "react";

export type ButtonProps = {
  text?: string;
  href?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  alt?: string;
};
