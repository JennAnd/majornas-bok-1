import styled from "styled-components";

export const Footer = styled.div`
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
  height: 340px;
  z-index: 1;
  right: 0px;
  bottom: 120px;
  padding: 0;
  margin: 0;

  @media (min-width: 768px) {
    bottom: 10px;
    width: 480px;
    height: 720px;
  }
  @media (min-width: 1024px) {
    bottom: 150px;
    width: 280px;
    height: 720px;
    right: 120px;
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
`;
export const OpeningsHoursDays = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0;
  margin-top: 0;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
  @media (min-width: 1024px) {
    font-size: 2rem;
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
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`;
