import styled from "styled-components";

export const EventCardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DateContainer = styled.div`
  position: relative;
  z-index: 1;
  top: ${({ theme }) => theme.margin.xxLarge};
  background-color: ${({ theme }) => theme.color.red};
  font-family: ${({ theme }) => theme.font.DMSans};
  color: ${({ theme }) => theme.color.white};
  height: ${({ theme }) => theme.margin.xLarge};
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  left: -${({ theme }) => theme.margin.large};

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
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  padding: 0.5rem ${({ theme }) => theme.padding.xLarge};
  margin-bottom: ${({ theme }) => theme.margin.large};

  display: flex;
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

export const ImageContainer = styled.div`
  background-color: ${({ theme }) => theme.color.orange};
  position: relative;
  width: 100%;
  height: 300px;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    width: 90%;
    height: 80%;
    left: 18%;
  }
`;
