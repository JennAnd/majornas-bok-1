import React from "react";
import * as S from "./Bookgrid.styles";
import Image from "next/image";
import { SanityClient } from "../../SanityClient";

export const Bookgrid = ({ book }) => {
  return (
    <S.BookWrapper>
      <S.Bookdiv>
        <Image src="/Images/Test/ASTROLOGI.webp" width={380} height={480} />
        <S.BookName>{book.title}</S.BookName>
        <S.AuthorName>{book.author}</S.AuthorName>
      </S.Bookdiv>
    </S.BookWrapper>
  );
};

// export const getServerSideProps = async () => {
//   const bookGrid = await SanityClient.fetch(`*[_type == 'books']{
//     "imageUrl": image.asset->url,
//       ...
//     }`);
//   return { props: { bookGrid } };
// };
