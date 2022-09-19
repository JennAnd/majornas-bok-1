import styled from "styled-components";

export const Container = styled.div`
  width: 1px;
  height: 10px;
  padding: 3rem;

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    padding: 6rem 0;
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    padding: 12rem 0;
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    padding: 10rem 0;
  }
`;
