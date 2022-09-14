import Image from "next/image";
import React, { useState, useRef } from "react";
import * as S from "./PopupOverlay.styles";
import { PopupOverlayProps } from "./PopupOverlay.types";

export const PopupOverlay: React.FC<PopupOverlayProps> = ({
  eventInfo,
  onClick,
}) => {
  return (
    <S.Overlay onClick={onClick}>
      <S.DateContainer>{eventInfo.date}</S.DateContainer>
      <S.ImageContainer>
        <Image
          src={eventInfo.imageUrl}
          alt="Event image"
          layout="fill"
          objectFit="cover"
        />
      </S.ImageContainer>
      <S.CloseContainer>
        <Image src="/Icons/VectorClose.svg" width={15} height={15} />
      </S.CloseContainer>
    </S.Overlay>
  );
};
