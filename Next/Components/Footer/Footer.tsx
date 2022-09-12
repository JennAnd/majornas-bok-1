import Image from "next/image";
import React from "react";
import * as S from "./Footer.styles";

export const Footer = () => {
  return (
    <>
      <S.Footer></S.Footer>
      <S.OpeningsHoursContainer>
        <S.OpeningsHoursTitle>Öppettider</S.OpeningsHoursTitle>
        <S.OpeningsHoursDays>Mån - Tis</S.OpeningsHoursDays>
        <S.OpeningsHoursTime>11 - 18</S.OpeningsHoursTime>
        <S.OpeningsHoursDays>Lördag</S.OpeningsHoursDays>
        <S.OpeningsHoursTime>11 - 15</S.OpeningsHoursTime>
        <S.OpeningsHoursDays>Sön - Mån</S.OpeningsHoursDays>
        <S.OpeningsHoursTime>Stängt</S.OpeningsHoursTime>
      </S.OpeningsHoursContainer>
    </>
  );
};
