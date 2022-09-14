import React, { FC } from "react";
import styled, { css } from "styled-components";

interface LengthProps {
  readonly tallest?: boolean;
  readonly tall?: boolean;
  readonly short?: boolean;
}

const Stripes = styled.div<LengthProps>`
  background: white;
  height: 2rem;

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
  background: pink;
  width: 50%;
  height: 40rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

interface StripesText {
  first_text?: string;
  second_text?: string;
  third_text?: string;
}

export const HeroStripes: FC<StripesText> = ({
  first_text,
  second_text,
  third_text,
}) => {
  return (
    <StripeContainer>
      <Stripes tall></Stripes>
      <Stripes></Stripes>
      <Stripes tallest></Stripes>
      <Stripes short>{first_text}</Stripes>
      <Stripes tall></Stripes>
      <Stripes></Stripes>
      <Stripes tallest></Stripes>
      <Stripes short></Stripes>
      <Stripes></Stripes>
      <Stripes tallest></Stripes>
      <Stripes></Stripes>
      <Stripes></Stripes>
    </StripeContainer>
  );
};
