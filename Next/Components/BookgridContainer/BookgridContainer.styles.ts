import styled from "styled-components";

export const BookGrid = styled.div`
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  display: grid;
  grid-template-columns: auto auto;
  margin-top: 40px;

  @media (min-width: 1250px) {
    grid-template-columns: auto auto auto;
  }
`;

export const BookGridWrapper = styled.div`
  margin-top: -180px;
  @media (${({ theme }) => theme.breakpoint.desktop}) {
    margin-top: -400px;
  }
  @media (${({ theme }) => theme.breakpoint.desktop}) {
    margin-top: -400px;
  }
`;
