import React, { useEffect, useState } from "react";
import { SanityClient } from "../../SanityClient";
import * as S from "./Footer.styles";

export const Footer = () => {
  const [allCompanyData, setCompanyData] = useState<any[]>();
  const [allOpeningData, setOpeningData] = useState<any[]>();

  useEffect(() => {
    SanityClient.fetch(`*[_type == 'openingHours']`)
      .then((data) => setOpeningData(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    SanityClient.fetch(`*[_type == "info"][0]`)
      .then((data) => setCompanyData(data))
      .catch(console.error);
  }, []);

  return (
    <S.Container>
      {allOpeningData?.length > 0 && (
        <S.OpeningsHoursContainer>
          <S.OpeningsHoursTitle>Öppettider</S.OpeningsHoursTitle>
          <S.OpeningsHoursDays>{allOpeningData[2].day}</S.OpeningsHoursDays>
          <S.OpeningsHoursTime>
            {allOpeningData[2].openingHrs}
          </S.OpeningsHoursTime>
          <S.OpeningsHoursDays>{allOpeningData[1].day}</S.OpeningsHoursDays>
          <S.OpeningsHoursTime>
            {allOpeningData[1].openingHrs}
          </S.OpeningsHoursTime>
          <S.OpeningsHoursDays>{allOpeningData[0].day}</S.OpeningsHoursDays>
          <S.OpeningsHoursTime>
            {allOpeningData[0].openingHrs}
          </S.OpeningsHoursTime>
        </S.OpeningsHoursContainer>
      )}

      <S.CompanyInfoContainer>
        <S.CompanyName>{allCompanyData?.companyName}</S.CompanyName>
        <S.CompanyInfo>{allCompanyData?.address}</S.CompanyInfo>
        <S.CompanyInfo>{allCompanyData?.zipCode}</S.CompanyInfo>
        <S.CompanyContact href="tel:+46763414000">
          {allCompanyData?.phone}
        </S.CompanyContact>
        <S.CompanyContact href="mailto:asdf@asdf.com">
          {allCompanyData?.email}
        </S.CompanyContact>
      </S.CompanyInfoContainer>
    </S.Container>
  );
};
