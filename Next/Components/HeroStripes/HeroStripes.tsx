import React, { FC } from "react";
import styled from "styled-components";

const StripeContainer = styled.div`
  background: pink;
  width: 30rem;
  height: 40rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

const Stripes = styled.div`
  background: white;
  width: 20rem;
  height: 2rem;
`;

export const HeroStripes: FC = () => {
  return (
    <StripeContainer>
      <Stripes></Stripes>
      <Stripes></Stripes>
      <Stripes></Stripes>
      <Stripes></Stripes>
      <Stripes></Stripes>
      <Stripes></Stripes>
      <Stripes></Stripes>
      <Stripes></Stripes>
    </StripeContainer>
  );
};
