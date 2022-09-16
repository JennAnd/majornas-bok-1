import Image from "next/image";
import React from "react";
import * as S from "./EventCard.styles";
import { EventCardProps } from "./EventCard.types";

export const EventCard: React.FC<EventCardProps> = ({
  eventInfo,
  children,
}) => {
  return (
    <S.EventCardContainer>
      <S.DateContainer>{eventInfo.date}</S.DateContainer>
      <S.ImageContainer>
        <Image
          src={eventInfo.imageUrl}
          alt="Event image"
          layout="fill"
          objectFit="cover"
        />
      </S.ImageContainer>
      <S.NameContainer>{eventInfo.name}</S.NameContainer>
    </S.EventCardContainer>
  );
};
