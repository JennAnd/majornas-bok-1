import styled from "styled-components";

export const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.lightGreen};
  padding: ${({ theme }) => theme.padding.large};

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100vw;
    display: flex;
    justify-content: center;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 60px;
    margin-top: 0px;
    padding-bottom: 100px;
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    grid-template-columns: auto auto auto;
  }
`;
