import * as S from "./CostumerReviews.styles";

export const CostumerReviews = ({ costumerReview }) => {
  return (
    <S.ReviewWrapper>
      {costumerReview?.length > 0 && (
        <S.ReviewContainer>
          <S.ReviewText>{costumerReview[0].Review} </S.ReviewText>
          <S.ReviewText>{costumerReview[1].Review}</S.ReviewText>
          <S.ReviewText>{costumerReview[2].Review}</S.ReviewText>
          <S.ReviewText>{costumerReview[3].Review}</S.ReviewText>
          <S.ReviewText>Testing</S.ReviewText>
        </S.ReviewContainer>
      )}
    </S.ReviewWrapper>
  );
};
