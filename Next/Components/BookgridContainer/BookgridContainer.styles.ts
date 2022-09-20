import styled from "styled-components";

export const BookWrapper = styled.div`
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  display: grid;
  grid-template-columns: auto auto;

  @media (min-width: 1250px) {
    grid-template-columns: auto auto auto;
  }
`;
