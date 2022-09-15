import React from "react";
import * as S from "./EventCard.styles";
import { EventCardProps } from "./EventCard.types";

export const EventCard: React.FC<EventCardProps> = ({ children }) => {
  return (
    <S.EventCardContainer>
      {children}
      <S.DateContainer />
      <S.NameContainer />
    </S.EventCardContainer>
  );
};
