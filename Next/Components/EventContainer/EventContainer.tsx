import React from "react";
import * as S from "./EventContainer.styles";
import { EventContainerProps } from "./EventContainer.types";

export const EventContainer: React.FC<EventContainerProps> = ({ children }) => {
  return <S.EventContainer>{children}</S.EventContainer>;
};
