import * as S from "./CostumerReviews.styles";
import Image from "next/image";
import { Bookmark } from "../Bookmark/Bookmark";

export const CostumerReviews = ({ costumerReview }) => {
  return (
    <S.ReviewWrapper>
      <S.BookmarkContainer>
        <Bookmark text="Vad besökare sagt" color="#FFF4BF" />
      </S.BookmarkContainer>
      {costumerReview?.length > 0 && (
        <S.ReviewContainer>
          <S.ReviewNoteOne>
            <S.ImageWrapper>
              <Image
                src="/Images/Pin.png"
                alt="pin-icon"
                width={40}
                height={40}
              />
            </S.ImageWrapper>
            <S.ReviewText>{costumerReview[1].Review}</S.ReviewText>
          </S.ReviewNoteOne>

          <S.ReviewNoteTwo>
            <S.ImageWrapper>
              <Image
                src="/Images/Pin.png"
                alt="pin-icon"
                width={40}
                height={40}
              />
            </S.ImageWrapper>
            <S.ReviewText>{costumerReview[0].Review}</S.ReviewText>
          </S.ReviewNoteTwo>

          <S.ReviewNoteThree>
            <S.ImageWrapper>
              <Image
                src="/Images/Pin.png"
                alt="pin-icon"
                width={40}
                height={40}
              />
            </S.ImageWrapper>
            <S.ReviewText>{costumerReview[2].Review}</S.ReviewText>
          </S.ReviewNoteThree>

          <S.ReviewNoteFour>
            <S.ImageWrapper>
              <Image
                src="/Images/Pin.png"
                alt="pin-icon"
                width={40}
                height={40}
              />
            </S.ImageWrapper>
            <S.ReviewText>{costumerReview[3].Review}</S.ReviewText>
          </S.ReviewNoteFour>
        </S.ReviewContainer>
      )}
    </S.ReviewWrapper>
  );
};
