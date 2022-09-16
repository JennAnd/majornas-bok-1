export type ButtonProps = {
  text?: string;
  href?: HTMLAnchorElement | string;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  alt?: string;
  ref?: HTMLDivElement | null;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  fontSize?: string;
};
