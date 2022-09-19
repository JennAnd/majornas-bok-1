import styled from "styled-components";
import Theme from "../../styles/styledComponents/theme";

export const BookCircleContainer = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.color.purple};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => theme.padding.xxLarge};

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    margin-bottom: -420px;
    padding: 5rem;
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    padding: 8rem;
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    padding: 12rem;
  }
`;
