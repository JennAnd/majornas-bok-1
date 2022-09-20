import React, { FC } from "react";
import styled from "styled-components";
import Image from "next/image";
import { HeroStripes } from "./HeroStripes/HeroStripes";

const HeroSection = styled.div`
  height: 60rem;

  display: flex;
  align-items: center;
`;

const BackgroundDiv = styled.div`
  background-color: ${({ theme }) => theme.color.mediumGreen};
  rotate: 10deg;
  width: 60rem;
  height: 120rem;

  position: absolute;
  right: -20rem;
  z-index: -1;
`;

const Ampersand = styled.div`
  position: absolute;
  right: -15rem;
  z-index: -1;
`;

const Title = styled.h1`
  max-width: 35rem;
  margin: 0rem 5rem;

  font-size: 3.5rem;
  font-family: ${({ theme }) => theme.font.BigCaslon};
  font-weight: 400;

  position: relative;
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
