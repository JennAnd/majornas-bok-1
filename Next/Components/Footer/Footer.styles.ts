import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  left: 0;
  bottom: 0;
  height: 0;
  width: 100vw;

  background-color: hotpink;
  background: url("/Images/Footer/Footer_Mobile.svg");
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  padding-bottom: 290%;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    background: url("/Images/Footer/Footer_Desktop.svg");
    padding-bottom: 93%;
    background-position: left !important;
  }
`;

export const OpeningsHoursContainer = styled.div`
  font-family: ${({ theme }) => theme.font.default};
  color: ${({ theme }) => theme.primaryColor.white};
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
    right: 185px;
  }
`;

export const OpeningsHoursTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 0.75rem;
  margin-top: 0.75rem;

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 3.5rem;
    margin-bottom: 2.75rem;
  }
  @media (${({ theme }) => theme.breakpoint.desktop}) {
    font-size: 2.25rem;
    margin-bottom: 1.5rem;
  }
  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    font-size: 3.25rem;
    margin-bottom: 1.5rem;
  }
`;
export const OpeningsHoursDays = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0;
  margin-top: 0;

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 2rem;
  }
  @media (${({ theme }) => theme.breakpoint.desktop}) {
    font-size: 1.8rem;
  }
  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    font-size: 2.25rem;
  }
`;

export const OpeningsHoursTime = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  margin-bottom: 1.75rem;
  margin-top: 0.25rem;

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 2.75rem;
    margin-bottom: 2.75rem;
  }
  @media (${({ theme }) => theme.breakpoint.desktop}) {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }
  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }
`;

export const CompanyInfoContainer = styled.div`
  background-color: hotpink;
  position: absolute;
  left: 50%;
  bottom: 160px;
  width: 100px;
  height: 100px;
`;

export const CompanyName = styled.p`
  font-family: ${({ theme }) => theme.font.serif};
  color: #292929;
`;
