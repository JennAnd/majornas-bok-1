import React, { FC } from "react";
import styled from "styled-components";
import Image from "next/image";
import { HeroStripes } from "./HeroStripes/HeroStripes";

const HeroSection = styled.div`
  height: 60rem;
  max-width: 80rem;
  display: flex;
  flex-direction: column;

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    align-items: center;
    flex-direction: row;
  }
`;

const BackgroundDiv = styled.div`
  background-color: ${({ theme }) => theme.color.mediumGreen};
  rotate: 15deg;
  width: 40rem;
  height: 60rem;
  margin-top: 130px;

  position: absolute;
  right: -20rem;
  z-index: -1;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    right: -30rem;
    margin-top: 0px;
    width: 60rem;
    height: 120rem;
    margin-top: 0px;
  }
`;

const Ampersand = styled.div`
  position: absolute;
  right: -15rem;
  height: 500px;
  z-index: -1;
  margin-top: 100px;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    right: -15rem;
    margin-top: 0px;
  }
`;

const Title = styled.h1`
  max-width: 35rem;
  margin: 2rem 2rem;
  font-size: 30px;
  font-family: ${({ theme }) => theme.font.BigCaslon};
  font-weight: 400;
  position: relative;

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    margin: 0rem 5rem;
    margin-bottom: 400px;
    margin-top: -400px;
    padding-bottom: 40px;
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    font-size: 3.5rem;
    margin-top: 0px;
    width: 40%;
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    font-size: 3.5rem;
    margin-top: 0px;
    width: 50%;
  }
`;

interface newsText {
  newsInfo: {
    h1: string;
    firstText: string;
    secondText: string;
    thirdText: string;
  };
}

export const NewsHero: FC<newsText> = ({ newsInfo }) => {
  return (
    <HeroSection>
      <BackgroundDiv />
      <Ampersand>
        <Image
          src="/Images/NewsHero/ampersand.svg"
          alt=""
          width={1000}
          height={1000}
        />
      </Ampersand>
      <Title>{newsInfo.h1}</Title>
      <HeroStripes heroStripesText={newsInfo} />
    </HeroSection>
  );
};
