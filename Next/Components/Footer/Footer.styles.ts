import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  bottom: 0;
  height: 0;
  width: 100vw;

  background-color: ${({ theme }) => theme.color.green};
  background: url("/Images/Footer/Footer_Mobile.svg");
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  padding-bottom: 292%;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    background-color: ${({ theme }) => theme.color.green};
    background: url("/Images/Footer/Footer_Desktop.svg");
    padding-bottom: 93%;
    background-position: left !important;
  }
`;

export const OpeningsHoursContainer = styled.div`
  font-family: ${({ theme }) => theme.font.default};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.medium};
  text-transform: uppercase;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: absolute;
  width: 230px;
  z-index: 1;
  right: 0px;
  bottom: 680px;
  padding: 0;
  margin: 0;

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    bottom: 1500px;
    width: 480px;
  }
  @media (${({ theme }) => theme.breakpoint.desktop}) {
    bottom: 520px;
    width: 280px;
    right: 120px;
  }
  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    bottom: 750px;
    width: 400px;
    right: calc(25% - 200px);
  }
`;

export const OpeningsHoursTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 0.75rem;
  margin-top: 0.75rem;

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme }) => theme.fontSize.xxLarge};
    margin-bottom: 2.75rem;
  }
  @media (${({ theme }) => theme.breakpoint.desktop}) {
    font-size: ${({ theme }) => theme.fontSize.xlarge};
    margin-bottom: 1.5rem;
  }
  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    font-size: ${({ theme }) => theme.fontSize.xxLarge};
    margin-bottom: 1.5rem;
  }
`;
export const OpeningsHoursDays = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0;
  margin-top: 0;


  @media (${({ theme }) => theme.breakpoint.tablet}) {

    font-size: 2.75rem;
  }
  @media (${({ theme }) => theme.breakpoint.desktop}) {
    font-size: 1.8rem;
  }
  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    font-size: 2.25rem;
  }
`;

export const OpeningsHoursTime = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 400;
  margin-bottom: 1.75rem;
  margin-top: 0.25rem;

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme }) => theme.fontSize.large};
    margin-bottom: 2.75rem;
  }
  @media (${({ theme }) => theme.breakpoint.desktop}) {
    font-size: ${({ theme }) => theme.fontSize.h2};
    margin-bottom: 1.5rem;
  }
  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    font-size: ${({ theme }) => theme.fontSize.large};
    margin-bottom: 2.5rem;
  }
`;

export const CompanyInfoContainer = styled.div`
  position: absolute;
  left: calc(50% - 135px);
  bottom: 180px;
  width: 270px;
  height: 230px;

  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;


  @media (${({ theme }) => theme.breakpoint.tablet}) {
    left: calc(50% - 275px);
    bottom: 330px;
    width: 550px;
    height: 500px;
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    left: calc(25% - 170px);
    bottom: 165px;
    width: 260px;
    height: 210px;
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    left: calc(25% - 235px);
    bottom: 230px;
    width: 360px;
    height: 300px;
  }
`;

export const CompanyName = styled.p`
  font-size: 1.88rem;
  font-family: ${({ theme }) => theme.font.serif};
  font-weight: bold;
  color: #292929;

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 3.9rem;
  }
  @media (${({ theme }) => theme.breakpoint.desktop}) {
    font-size: 1.6rem;
    margin-bottom: ${({ theme }) => theme.margin.large};
  }
  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    font-size: 2.6rem;
    margin-top: 0;
  }
`;
export const CompanyInfo = styled.p`
  font-family: ${({ theme }) => theme.font.serif};
  color: #292929;
  margin: ${({ theme }) => theme.margin.none};


  &:nth-child(3) {
    margin-bottom: 1rem;
  }

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 2.25rem;
    &:nth-child(3) {
      margin-bottom: ${({ theme }) => theme.margin.xLarge};
    }
  }
  @media (${({ theme }) => theme.breakpoint.desktop}) {
    font-size: 1.2rem;
    &:nth-child(3) {
      margin-bottom: ${({ theme }) => theme.margin.large};
    }
  }
  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    font-size: 1.6rem;
  }
`;

export const CompanyContact = styled.a`
  font-family: ${({ theme }) => theme.font.serif};
  color: #292929;
  text-decoration: none;
  &:hover {
    color: #a3bfa7;
    text-decoration: underline;
  }

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 2.25rem;
  }
  @media (${({ theme }) => theme.breakpoint.desktop}) {
    font-size: 1.2rem;
  }
  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    font-size: 1.6rem;
  }
`;
