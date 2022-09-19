import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 10px;
  padding: 3rem;

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    padding: 6rem;
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    padding: 12rem;
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    padding: 10rem;
  }
`;
