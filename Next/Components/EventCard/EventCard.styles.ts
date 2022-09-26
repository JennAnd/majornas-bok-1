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

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    left: 0%;
    width: fit-content;
    padding: ${({ theme }) => theme.margin.xLarge};
    font-size: ${({ theme }) => theme.fontSize.medium};
    top: 13.1%;
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

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
    margin-bottom: ${({ theme }) => theme.margin.large};
    padding: 0.75rem ${({ theme }) => theme.padding.medium};
    align-items: flex-start;
    width: 210px;
    height: 80px;
  }
  @media (${({ theme }) => theme.breakpoint.desktop}) {
    font-size: ${({ theme }) => theme.fontSize.h2};
    width: 280px;
    height: 90px;
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    top: 0;
    width: 380px;
  }
`;

export const ImageContainer = styled.div`
  background-color: ${({ theme }) => theme.color.orange};
  position: relative;
  width: 100%;
  height: 300px;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    width: 280px;
    height: 400px;
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    width: 380px;
    height: 500px;
  }
`;
