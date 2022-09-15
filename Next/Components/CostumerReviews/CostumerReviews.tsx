import * as S from "./CostumerReviews.styles";
import Image from "next/image";

export const CostumerReviews = ({ costumerReview }) => {
  return (
    <S.ReviewWrapper>
      {costumerReview?.length > 0 && (
        <S.ReviewContainer>
          <S.ReviewNoteOne>
            <S.ImageWrapper>
              <Image
                src="/Images/Pin.png"
                alt="pin-icon"
                width={43}
                height={40}
              />
            </S.ImageWrapper>
            <S.ReviewText>{costumerReview[0].Review}</S.ReviewText>
          </S.ReviewNoteOne>

          <S.ReviewNoteTwo>
            <S.ImageWrapper>
              <Image
                src="/Images/Pin.png"
                alt="pin-icon"
                width={43}
                height={40}
              />
            </S.ImageWrapper>
            <S.ReviewText>{costumerReview[2].Review}</S.ReviewText>
          </S.ReviewNoteTwo>

          <S.ReviewNoteThree>
            <S.ImageWrapper>
              <Image
                src="/Images/Pin.png"
                alt="pin-icon"
                width={43}
                height={40}
              />
            </S.ImageWrapper>
            <S.ReviewText>{costumerReview[1].Review}</S.ReviewText>
          </S.ReviewNoteThree>

          <S.ReviewNoteFour>
            <S.ImageWrapper>
              <Image
                src="/Images/Pin.png"
                alt="pin-icon"
                width={43}
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
