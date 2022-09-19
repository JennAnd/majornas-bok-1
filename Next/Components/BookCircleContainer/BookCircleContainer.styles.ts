import styled from "styled-components";

export const BookCircleContainer = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.color.purple};
  display: flex;
  gap: 5rem;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => theme.padding.xxLarge};

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    margin-bottom: -410px;
    padding: 3rem;
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    height: 950px;
    margin-bottom: 0px;
    flex-direction: row;
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
  }
`;

export const LeftContainer = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  display: flex;
  flex-direction: column;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    width: 50%;
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    margin-top: 50px;
  }
`;

export const RightContainer = styled.div`
  right: 0;
  width: 50%;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    position: relative;
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: block;
  top: -200px;
  width: 100%;
  height: 80%;
  margin-bottom: -200px;

  @media (${({ theme }) => theme.breakpoint.tablet}) {
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    margin-bottom: -100px;
    top: -120px;
    height: 70%;
  }
`;

export const TextTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: ${({ theme }) => theme.font.BigCaslon};
  color: ${({ theme }) => theme.color.white};
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.color.white};
  text-underline-offset: 0.5rem;
  text-decoration-thickness: 0.1rem;
  letter-spacing: 0.5px;
  margin-top: ${({ theme }) => theme.margin.xLarge};
`;

export const TextBody = styled.p`
  font-size: ${({ theme }) => theme.fontSize.text};
  font-family: ${({ theme }) => theme.font.DMSans};
  color: ${({ theme }) => theme.color.white};
`;
