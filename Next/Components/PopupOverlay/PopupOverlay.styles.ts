import styled from "styled-components";

export const Overlay = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  position: fixed;
  top: 0px;
  z-index: 3;
  height: 100vh;
  display: flex;
  flex-direction: column;
  left: 0px;
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    height: 80vh;
    width: 90vw;
    top: calc(50% - 40vh);
    left: calc(50% - 45vw);

    flex-direction: row;
    gap: 5rem;
    box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.2);
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    height: 80vh;
    width: 80vw;
    top: calc(50% - 40vh);
    left: calc(50% - 40vw);
  }
`;

export const LeftContainer = styled.div`
  width: 100%;
  left: 0;
  height: 100%;
  @media (${({ theme }) => theme.breakpoint.desktop}) {
    position: relative;
    width: 50%;
    left: 1rem;
    padding: 1rem 0;
    margin-top: ${({ theme }) => theme.margin.xxLarge};
  }
`;
export const RightContainer = styled.div`
  width: 100%;
  right: 0;
  @media (${({ theme }) => theme.breakpoint.desktop}) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: relative;
    width: 50%;
    /* top: 15%; */
    margin-top: ${({ theme }) => theme.margin.xxLarge};
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

export const ImageContainer = styled.div`
  background-color: ${({ theme }) => theme.color.orange};
  position: relative;
  width: 100%;
  height: 100%;
  top: -3rem;
  @media (${({ theme }) => theme.breakpoint.desktop}) {
    width: 90%;
    height: 80%;
    left: 18%;
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
  z-index: 2;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    background-color: none;
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
    padding: 0 ${({ theme }) => theme.padding.large};
    margin-bottom: ${({ theme }) => theme.margin.medium};
    background-color: unset;
    color: ${({ theme }) => theme.color.black};
    top: -1.5rem;
    /* top: ${({ theme }) => theme.margin.xLarge}; */
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    font-size: ${({ theme }) => theme.fontSize.xlarge};
    top: 0;
  }
`;

export const InfoWrapper = styled.div`
  padding: ${({ theme }) => theme.padding.large};

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    position: relative;
  }
`;

export const DescriptionContainer = styled.div`
  position: relative;
  font-family: ${({ theme }) => theme.font.DMSans};
  font-size: ${({ theme }) => theme.fontSize.text};
  top: -2rem;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    top: -3rem;
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    /* font-size: ${({ theme }) => theme.fontSize.medium}; */
    top: -3rem;
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

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    font-size: ${({ theme }) => theme.fontSize.large};
    top: -4rem;
  }
`;

export const NameAndMail = styled.p`
  font-family: ${({ theme }) => theme.font.DMSans};
  font-size: ${({ theme }) => theme.fontSize.text};
  margin-bottom: ${({ theme }) => theme.margin.medium};
  position: relative;
  top: -2rem;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    margin-bottom: ${({ theme }) => theme.margin.small};
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
    top: -4rem;
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

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
    top: -4rem;
  }
`;
