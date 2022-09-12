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

  @media (min-width: 1024px) {
    background: url("/Images/Footer/Footer_Desktop.svg");
    padding-bottom: 93%;
    background-position: left !important;
  }
`;

export const OpeningsHoursContainer = styled.div`
  font-family: "Inter", sans-serif;
  color: #fff;
  font-size: 1.25rem;
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

  @media (min-width: 768px) {
    bottom: 1500px;
    width: 480px;
  }
  @media (min-width: 1024px) {
    bottom: 520px;
    width: 280px;
    right: 120px;
  }
  @media (min-width: 1280px) {
    bottom: 750px;
    width: 400px;
    right: 185px;
  }
`;

export const OpeningsHoursTitle = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 0.75rem;
  margin-top: 0.75rem;

  @media (min-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 2.75rem;
  }
  @media (min-width: 1024px) {
    font-size: 2.25rem;
    margin-bottom: 1.5rem;
  }
  @media (min-width: 1280px) {
    font-size: 3.25rem;
    margin-bottom: 1.5rem;
  }
`;
export const OpeningsHoursDays = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0;
  margin-top: 0;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }
  @media (min-width: 1280px) {
    font-size: 2.25rem;
  }
`;

export const OpeningsHoursTime = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  margin-bottom: 1.75rem;
  margin-top: 0.25rem;

  @media (min-width: 768px) {
    font-size: 2.75rem;
    margin-bottom: 2.75rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }
  @media (min-width: 1280px) {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }
`;

export const CompanyInfoContainer = styled.div`
  position: absolute;
  left: 60px;
  bottom: 180px;
  width: 270px;
  height: 230px;

  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CompanyName = styled.p`
  font-size: 1.9rem;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  color: #292929;
`;
export const CompanyInfo = styled.p`
  font-family: "Courier New", Courier, monospace;
  color: #292929;
  margin: 0;

  &:nth-child(3) {
    margin-bottom: 1rem;
  }
`;

export const CompanyPhone = styled.a`
  font-family: "Courier New", Courier, monospace;
  color: #292929;
  &:hover {
    color: #a3bfa7;
  }
`;
export const CompanyEmail = styled.a`
  font-family: "Courier New", Courier, monospace;
  color: #292929;
  cursor: pointer;
  &:hover {
    color: #a3bfa7;
  }
`;
