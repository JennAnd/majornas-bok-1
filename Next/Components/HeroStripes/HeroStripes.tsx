import React, { FC } from "react";
import styled, { css } from "styled-components";

const StripeContainer = styled.div`
  background: pink;
  width: 40rem;
  height: 40rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

interface LengthProps {
  readonly tallest?: boolean;
  readonly tall?: boolean;
  readonly short?: boolean;
}

const Stripes = styled.div<LengthProps>`
  background: white;
  height: 2rem;

  width: 20rem;
  width: ${(props) => {
    if (props.tallest) {
      return "35rem";
    }
    if (props.tall) {
      return "30rem";
    }
    if (props.short) {
      return "10rem";
    }
  }};
`;

export const HeroStripes: FC = () => {
  return (
    <StripeContainer>
      <Stripes tallest></Stripes>
      <Stripes tall></Stripes>
      <Stripes short></Stripes>
      <Stripes></Stripes>
      <Stripes></Stripes>
      <Stripes></Stripes>
      <Stripes></Stripes>
      <Stripes></Stripes>
    </StripeContainer>
  );
};
