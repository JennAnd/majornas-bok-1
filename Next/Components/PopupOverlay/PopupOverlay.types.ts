import { MouseEventHandler } from "react";

export type PopupOverlayProps = {
  text?: string;
  href?: string;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  alt?: string;
  imageURL?: string;
  imageElement?: HTMLImageElement;
  eventInfo?: {
    name: string;
    date: string;
    description: [{ children }];
    slug: string;
    image: string;
    _id: string;
    imageUrl: string;
  };
};
