import React, { useEffect, useState } from "react";
import { SanityClient } from "../../SanityClient";
import * as S from "./Footer.styles";

export const Footer = () => {
  const [allCompanyData, setCompanyData] = useState<any[companyName]>();

  useEffect(() => {
    SanityClient.fetch(`*[_type == "info"][0]`)
      .then((data) => setCompanyData(data))
      .catch(console.error);
  }, []);

  return (
    <S.Container>
      <S.OpeningsHoursContainer>
        <S.OpeningsHoursTitle>Öppettider</S.OpeningsHoursTitle>
        <S.OpeningsHoursDays>Mån - Tis</S.OpeningsHoursDays>
        <S.OpeningsHoursTime>11 - 18</S.OpeningsHoursTime>
        <S.OpeningsHoursDays>Lördag</S.OpeningsHoursDays>
        <S.OpeningsHoursTime>11 - 15</S.OpeningsHoursTime>
        <S.OpeningsHoursDays>Sön - Mån</S.OpeningsHoursDays>
        <S.OpeningsHoursTime>Stängt</S.OpeningsHoursTime>
      </S.OpeningsHoursContainer>
      <S.CompanyInfoContainer>
        {allCompanyData?.companyName && (
          <>
            <S.CompanyName>{allCompanyData?.companyName}</S.CompanyName>
            <S.CompanyInfo>{allCompanyData?.address}</S.CompanyInfo>
            <S.CompanyInfo>{allCompanyData?.zipCode}</S.CompanyInfo>
            <S.CompanyContact href="tel:+46763414000">
              {allCompanyData?.phone}
            </S.CompanyContact>
            <S.CompanyContact href="mailto:asdf@asdf.com">
              {allCompanyData?.email}
            </S.CompanyContact>
          </>
        )}
      </S.CompanyInfoContainer>
    </S.Container>
  );
};
