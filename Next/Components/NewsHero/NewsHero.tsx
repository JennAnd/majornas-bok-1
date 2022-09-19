import React, { FC } from "react";
import styled from "styled-components";
import Image from "next/image";
import { HeroStripes } from "../HeroStripes/HeroStripes";

const HeroSection = styled.div`
  height: 60rem;

  display: flex;
  align-items: center;
`;

const BackgroundDiv = styled.div`
  background-color: pink;
  rotate: 10deg;
  width: 60rem;
  height: 60rem;

  position: absolute;
  right: -20rem;
`;

const Ampersand = styled.div`
  position: absolute;
  right: -15rem;
`;

const Title = styled.h1`
  position: relative;
  font-size: 3rem;
  margin: 0rem 5rem;
`;

export const NewsHero: FC = ({ heroStripesText }) => {
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
      <Title>
        Stig in i böckernas värld <br /> och drick en kopp kaffe i<br /> hjärtat
        av majorna.
      </Title>
      <HeroStripes heroStripesText={heroStripesText} />
    </HeroSection>
  );
};
