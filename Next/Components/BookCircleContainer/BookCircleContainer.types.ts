export type BookCircleContainerProps = {
  text?: string;
  href?: string;
  className?: string;
  children?: React.ReactNode;
  alt?: string;
  bookCircle?: [
    {
      name: string;
      date: string;
      description: { children }[];
      slug: string;
      image: string;
      _id: string;
      imageUrl: string;
    }
  ];
};
