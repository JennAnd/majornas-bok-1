import React, { useState, useRef } from "react";
import * as S from "./PopupOverlay.styles";
import { PopupOverlayProps } from "./PopupOverlay.types";

export const PopupOverlay: React.FC<PopupOverlayProps> = () => {
  return (
    <S.Overlay>
      <S.dateContainer>2021-01-01</S.dateContainer>
    </S.Overlay>
  );
};
