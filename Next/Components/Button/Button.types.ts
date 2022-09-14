import { MouseEventHandler } from "react";

export type ButtonProps = {
  text?: string;
  href?: string;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  alt?: string;
  ref?: HTMLDivElement | null;
  width?: string;
  height?: string;
  padding?: string;
  fontSize?: string;
};
