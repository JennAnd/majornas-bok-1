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
`;

const StripeContainer = styled.div`
  width: 50%;
  height: 40rem;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
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
