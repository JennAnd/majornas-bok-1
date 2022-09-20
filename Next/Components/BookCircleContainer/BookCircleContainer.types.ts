export type BookCircleContainerProps = {
  text?: string;
  href?: string;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  alt?: string;
  imageURL?: string;
  imageElement?: HTMLImageElement;
  bookCircle?: [
    {
      name: string;
      date: string;
      description: [{ children }];
      slug: string;
      image: string;
      _id: string;
      imageUrl: string;
    }
  ];
};
