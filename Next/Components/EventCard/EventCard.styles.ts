import styled from "styled-components";

export const EventCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.padding.large};
`;

export const DateContainer = styled.div`
  position: relative;
  z-index: 1;
  top: ${({ theme }) => theme.margin.large};
  background-color: ${({ theme }) => theme.color.red};
  font-family: ${({ theme }) => theme.font.DMSans};
  color: ${({ theme }) => theme.color.white};
  height: ${({ theme }) => theme.margin.xLarge};
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    left: 2%;
    width: fit-content;
    padding: ${({ theme }) => theme.margin.xLarge};
    font-size: ${({ theme }) => theme.fontSize.h2};
    top: 5%;
  }
`;

export const NameContainer = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.purple};
  font-family: ${({ theme }) => theme.font.BigCaslon};
  font-size: ${({ theme }) => theme.fontSize.h2};
  color: ${({ theme }) => theme.color.white};
  width: fit-content;
  padding: 0.5rem ${({ theme }) => theme.padding.xLarge};
  top: -2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    padding: 0 ${({ theme }) => theme.padding.large};
    margin-bottom: ${({ theme }) => theme.margin.medium};
    background-color: unset;
    color: ${({ theme }) => theme.color.black};
    top: ${({ theme }) => theme.margin.xLarge};
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    font-size: ${({ theme }) => theme.fontSize.h1};
    top: 0;
  }
`;
