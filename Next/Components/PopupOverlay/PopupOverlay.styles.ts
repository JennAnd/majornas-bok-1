import styled from "styled-components";
import Theme from "../../styles/styledComponents/theme";

export const Overlay = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  position: absolute;
  top: 0px;
  z-index: 3;
  width: 100vw;
  height: 100vh;
`;

export const DateContainer = styled.div`
  position: relative;
  z-index: 1;
  top: ${({ theme }) => theme.margin.xLarge};
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

export const ImageContainer = styled.div`
  background-color: limegreen;
  position: relative;
  width: 100%;
  height: 40%;
  top: -3rem;
`;

export const CloseContainer = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.color.white};
  width: ${({ theme }) => theme.margin.xLarge};
  height: ${({ theme }) => theme.margin.xLarge};
  right: ${({ theme }) => theme.margin.large};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  display: flex;
  justify-content: center;
  top: ${({ theme }) => theme.margin.xxLarge};
  opacity: 0.85;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

export const NameContainer = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.purple};
  font-family: ${({ theme }) => theme.font.BigCaslon};
  font-size: ${({ theme }) => theme.fontSize.h2};
  color: ${({ theme }) => theme.color.white};
  width: 50%;
  padding: ${({ theme }) => theme.padding.large};
  top: -5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DescriptionContainer = styled.div`
  position: relative;
  font-family: ${({ theme }) => theme.font.DMSans};
  font-size: ${({ theme }) => theme.fontSize.text};
  padding: ${({ theme }) => theme.padding.large};
  top: -5rem;
`;
