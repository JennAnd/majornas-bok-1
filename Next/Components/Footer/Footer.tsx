import * as S from "./Footer.styles";

export const Footer = ({ openingHours, companyInfo }) => {
  return (
    <S.Container>
      {openingHours?.length > 0 && (
        <S.OpeningsHoursContainer>
          <S.OpeningsHoursTitle>Öppettider</S.OpeningsHoursTitle>
          <S.OpeningsHoursDays>{openingHours[2].day}</S.OpeningsHoursDays>
          <S.OpeningsHoursTime>
            {openingHours[2].openingHrs}
          </S.OpeningsHoursTime>
          <S.OpeningsHoursDays>{openingHours[1].day}</S.OpeningsHoursDays>
          <S.OpeningsHoursTime>
            {openingHours[1].openingHrs}
          </S.OpeningsHoursTime>
          <S.OpeningsHoursDays>{openingHours[0].day}</S.OpeningsHoursDays>
          <S.OpeningsHoursTime>
            {openingHours[0].openingHrs}
          </S.OpeningsHoursTime>
        </S.OpeningsHoursContainer>
      )}

      <S.CompanyInfoContainer>
        <S.CompanyName>{companyInfo?.companyName}</S.CompanyName>
        <S.CompanyInfo>{companyInfo?.address}</S.CompanyInfo>
        <S.CompanyInfo>{companyInfo?.zipCode}</S.CompanyInfo>
        <S.CompanyContact href="tel:+46763414000">
          {companyInfo?.phone}
        </S.CompanyContact>
        <S.CompanyContact href="mailto:asdf@asdf.com">
          {companyInfo?.email}
        </S.CompanyContact>
      </S.CompanyInfoContainer>
    </S.Container>
  );
};
