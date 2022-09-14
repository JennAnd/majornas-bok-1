import styled from "styled-components";
import Theme from "../../styles/styledComponents/theme";

export const Overlay = styled.div`
  position: absolute;
  z-index: 2;
  background-color: hotpink;
  width: 100vw;
  height: 100vh;
`;

export const dateContainer = styled.div`
  background-color: ${({ theme }) => theme.color.red};
  font-family: ${({ theme }) => theme.font.DMSans};
  color: ${({ theme }) => theme.color.white};
  height: ${({ theme }) => theme.margin.xLarge};
  width: 40%;

  margin-top: ${({ theme }) => theme.margin.large};
  display: flex;
  justify-content: center;
  align-items: center;
`;
