import styled from "styled-components";

export const ReviewWrapper = styled.div`
  width: 100vw;
  background-color: aqua;
  /* background-color: ${({ theme }) => theme.color.green}; */

  @media (${({ theme }) => theme.breakpoint.desktop}) {
  }
`;

export const ReviewContainer = styled.div`
  width: 100vw;
  background-color: aqua;
  /* background-color: ${({ theme }) => theme.color.green}; */

  @media (${({ theme }) => theme.breakpoint.desktop}) {
  }
`;

export const ReviewText = styled.p`
  color: hotpink;
  font-size: 20px;
  background-color: yellow;
  /* background-color: ${({ theme }) => theme.color.green}; */

  @media (${({ theme }) => theme.breakpoint.desktop}) {
  }
`;
