import styled from "styled-components";

export const Overlay = styled.div`
  background-color: ${({ theme }) => theme.color.lightGreen};
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 0 ${({ theme }) => theme.padding.large};

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: row;
    gap: 3rem;
    padding: 100px 0.5rem 50px 0.5rem;
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    gap: 5rem;
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    padding: 100px ${({ theme }) => theme.padding.large};
    padding-bottom: 0px;
  }
`;

export const LeftContainer = styled.div`
  width: 100%;
  left: 0;
  @media (${({ theme }) => theme.breakpoint.tablet}) {
    position: relative;
    width: 50%;
    left: 1rem;
    padding: 1rem 0;
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
  }
`;
export const RightContainer = styled.div`
  right: 0;

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    width: 50%;
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    justify-content: space-evenly;
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
  }
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
    width: fit-content;
    padding: ${({ theme }) => theme.margin.xLarge};
    font-size: ${({ theme }) => theme.fontSize.medium};
    top: -3.7%;
    left: -6.5%;
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    font-size: ${({ theme }) => theme.fontSize.h2};
    top: -2.5%;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    position: static;
    width: 90%;
    height: 90%;
    left: 6%;
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
  }
`;

export const NameContainer = styled.div`
  display: block;
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
    font-size: ${({ theme }) => theme.fontSize.h2};
    padding: 0 ${({ theme }) => theme.padding.large};
    margin-bottom: 0;
    background-color: unset;
    color: ${({ theme }) => theme.color.black};
    top: ${({ theme }) => theme.margin.xLarge};
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    top: 0;
  }
`;

export const TitleContainer = styled.div`
  display: none;

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    display: block;
    font-family: ${({ theme }) => theme.font.BigCaslon};
    font-size: ${({ theme }) => theme.fontSize.xlarge};
    padding: 0 ${({ theme }) => theme.padding.large};
    margin-bottom: 0;
    background-color: unset;
    color: ${({ theme }) => theme.color.black};
    top: ${({ theme }) => theme.margin.xLarge};
    margin-bottom: 30px;
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    top: 0;
  }
`;

export const InfoWrapper = styled.div`
  padding: 0;

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    padding: ${({ theme }) => theme.padding.large};
    position: relative;
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
  }
`;

export const DescriptionContainer = styled.div`
  display: none;
  font-family: ${({ theme }) => theme.font.DMSans};
  font-size: ${({ theme }) => theme.fontSize.text};
  top: -2rem;

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    display: block;
    top: -2rem;
    margin-bottom: ${({ theme }) => theme.margin.xxLarge};
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    margin-bottom: 6rem;
    font-size: ${({ theme }) => theme.fontSize.medium};
    width: 70%;
    top: -6rem;
  }
`;

export const SignUpWrapper = styled.div`
  display: none;
  @media (${({ theme }) => theme.breakpoint.tablet}) {
    display: block;
    width: 80%;
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    display: block;
    width: 60%;
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

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    top: -4rem;
  }
`;

export const NameAndMail = styled.p`
  font-family: ${({ theme }) => theme.font.DMSans};
  font-size: ${({ theme }) => theme.fontSize.text};
  margin-bottom: ${({ theme }) => theme.margin.medium};
  position: relative;
  top: -2rem;

  @media (${({ theme }) => theme.breakpoint.tablet}) {
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

  @media (${({ theme }) => theme.breakpoint.tablet}) {
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
    top: -4rem;
  }
`;

export const SignUpButtonContainer = styled.div`
  display: none;
  @media (${({ theme }) => theme.breakpoint.tablet}) {
    display: block;
    width: 80%;
  }
  @media (${({ theme }) => theme.breakpoint.desktop}) {
    width: 60%;
  }
`;

export const ReadMoreAndSignUpButtonContainer = styled.div`
  display: block;
  @media (${({ theme }) => theme.breakpoint.tablet}) {
    display: none;
  }
`;
