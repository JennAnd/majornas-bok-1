import { MouseEventHandler } from "react";

export type PopupOverlayProps = {
  text?: string;
  href?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  alt?: string;
  imageURL?: string;
  imageElement?: HTMLImageElement;
};
