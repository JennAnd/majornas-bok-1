import Image from "next/image";
import React, { useState, useRef } from "react";
import { Button } from "../Button/Button";
import * as S from "./PopupOverlay.styles";
import { PopupOverlayProps } from "./PopupOverlay.types";

export const PopupOverlay: React.FC<PopupOverlayProps> = ({
  eventInfo,
  onClick,
  text,
}) => {
  return (
    <S.Overlay>
      <S.DateContainer>{eventInfo.date}</S.DateContainer>
      <S.ImageContainer>
        <Image
          src={eventInfo.imageUrl}
          alt="Event image"
          layout="fill"
          objectFit="cover"
        />
      </S.ImageContainer>
      <S.CloseContainer onClick={onClick}>
        <Image src="/Icons/VectorClose.svg" width={15} height={15} />
      </S.CloseContainer>
      <S.NameContainer>{eventInfo.name}</S.NameContainer>
      <S.InfoWrapper>
        <S.DescriptionContainer>
          {eventInfo.description[0].children[0].text}
        </S.DescriptionContainer>
        <S.SignUpContainer>Anmäl dig till författarkvällen</S.SignUpContainer>
        <S.NameAndMail>Namn</S.NameAndMail>
        <S.Input />
        <S.NameAndMail>Mailadress</S.NameAndMail>
        <S.Input />
        <Button
          text="Anmäl dig"
          width="100%"
          padding="1rem"
          fontSize="1.2rem"
          onClick={() =>
            ((window as Window).location = "mailto:info@majornasbocker.se")
          }
        />
      </S.InfoWrapper>
    </S.Overlay>
  );
};
