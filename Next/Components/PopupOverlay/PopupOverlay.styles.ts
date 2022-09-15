import styled from "styled-components";

export const Overlay = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  position: absolute;
  top: 0px;
  z-index: 3;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    height: 40vh;
    /* width: 85vw; */
    top: calc(50% - 40vh);
    left: calc(50% - 42.5vw);
    flex-direction: row;
    gap: 5rem;
  }
`;

export const LeftContainer = styled.div`
  /* display: block; */
  width: 100%;
  left: 0;
  height: 100%;
  @media (${({ theme }) => theme.breakpoint.desktop}) {
    width: 50%;
  }
`;
export const RightContainer = styled.div`
  /* display: block; */
  width: 100%;
  right: 0;
  @media (${({ theme }) => theme.breakpoint.desktop}) {
    width: 50%;
  }
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
  /* margin-top: ${({ theme }) => theme.margin.large}; */
  display: flex;
  justify-content: center;
  align-items: center;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    left: 5%;
    /* width: 30%; */
    padding: ${({ theme }) => theme.margin.xLarge};
    font-size: ${({ theme }) => theme.fontSize.h2};
  }
`;

export const ImageContainer = styled.div`
  background-color: ${({ theme }) => theme.color.orange};
  position: relative;
  width: 100%;
  height: 100%;
  top: -3rem;
  @media (${({ theme }) => theme.breakpoint.desktop}) {
    /* position: absolute; */
    /* width: 40%; */
    height: 80%;
    left: 10%;
  }
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
  top: ${({ theme }) => theme.margin.large};
  opacity: 0.85;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    width: ${({ theme }) => theme.margin.xxLarge};
    height: ${({ theme }) => theme.margin.xxLarge};
    opacity: 1;
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
    /* right: -35%; */
    background-color: unset;
    color: ${({ theme }) => theme.color.black};
    top: -5rem;
  }
`;

export const InfoWrapper = styled.div`
  padding: ${({ theme }) => theme.padding.large};

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    position: relative;
    /* width: 50%; */
    /* right: -50%; */
  }
`;

export const DescriptionContainer = styled.div`
  position: relative;
  font-family: ${({ theme }) => theme.font.DMSans};
  font-size: ${({ theme }) => theme.fontSize.text};
  top: -3rem;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
  }
`;

export const SignUpContainer = styled.p`
  font-family: ${({ theme }) => theme.font.BigCaslon};
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.h2};
  text-decoration: underline;
  text-underline-offset: 10px;
  text-decoration-thickness: 1px;
  position: relative;
  top: -2rem;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
  }
`;

export const NameAndMail = styled.p`
  font-family: ${({ theme }) => theme.font.DMSans};
  font-size: ${({ theme }) => theme.fontSize.text};
  margin-bottom: ${({ theme }) => theme.margin.medium};
  position: relative;
  top: -2rem;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
  }
`;

export const Input = styled.input`
  border: 1.5px solid ${({ theme }) => theme.color.black};
  width: 100%;
  height: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.padding.medium};
  margin-bottom: ${({ theme }) => theme.margin.medium};
  position: relative;
  top: -2rem;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
  }
`;
