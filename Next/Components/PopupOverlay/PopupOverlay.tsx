import React, { useState, useRef } from "react";
import * as S from "./PopupOverlay.styles";

export const PopupOverlay = ({ eventInfo }) => {
  return (
    <S.Overlay>
      <S.dateContainer>{eventInfo.date}</S.dateContainer>
    </S.Overlay>
  );
};
