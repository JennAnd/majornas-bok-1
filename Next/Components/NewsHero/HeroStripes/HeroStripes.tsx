import React, { FC } from "react";
import styled, { css } from "styled-components";

interface LengthProps {
  readonly tallest?: boolean;
  readonly tall?: boolean;
  readonly short?: boolean;
}

const Stripes = styled.div<LengthProps>`
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};

  text-align: start;
  font-family: "Courier New";
  padding: 0.2rem 1rem;
  opacity: 80%;
  height: 1.5rem;
  max-width: 80rem;
  width: 85%;
  width: ${(props) => {
    if (props.tallest) {
      return "100%";
    }
    if (props.tall) {
      return "95%";
    }
    if (props.short) {
      return "70%";
    }
  }};

  @media (max-width: 1300px) {
    width: ${(props) => {
      if (props.short) {
        return "100%";
      }
    }};
    display: ${(props) => {
      if (props.tallest) {
        return "none";
      }
    }};
  }

  @media (max-width: 800px) {
    padding: 0.3rem 0.7rem;
    font-size: 0.8rem;
  }
`;

const StripeContainer = styled.div`
  top: 20rem;
  height: 34rem;
  margin-top: -100px;
  width: 90%;
  position: absolute;
  right: 0rem;
  top: 24rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    top: 24rem;
  }
  @media (${({ theme }) => theme.breakpoint.desktop}) {
    width: 50%;
    height: 40rem;
    position: absolute;
    right: 0rem;
    top: 10rem;
  }
`;

interface StripesText {
  heroStripesText: {
    firstText: string;
    secondText: string;
    thirdText: string;
  };
}

export const HeroStripes: FC<StripesText> = ({ heroStripesText }) => {
  return (
    <StripeContainer>
      <Stripes tall></Stripes>
      <Stripes></Stripes>
      <Stripes tallest></Stripes>
      <Stripes short>{heroStripesText.firstText}</Stripes>
      <Stripes tall></Stripes>
      <Stripes></Stripes>
      <Stripes tallest></Stripes>
      <Stripes short>{heroStripesText.secondText}</Stripes>
      <Stripes></Stripes>
      <Stripes tallest></Stripes>
      <Stripes></Stripes>
      <Stripes short>{heroStripesText.thirdText}</Stripes>
      <Stripes tall></Stripes>
      <Stripes tallest></Stripes>
      <Stripes></Stripes>
    </StripeContainer>
  );
};
