import styled from "styled-components";

export const HeroWrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.black};
`;

export const bookmarkWrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 3;
`;

export const ImageHeroWrapperMobile = styled.div`
  display: block;
  @media (min-width: 500px) {
    display: none;
  }
`;

export const ImageHeroWrapperDesktop = styled.div`
  display: none;
  @media (min-width: 500px) {
    display: block;
  }
`;

export const HeroTextWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  padding: ${({ theme }) => theme.padding.xLarge};

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    padding: 48px 80px;
    margin-right: 300px;
  }
`;

export const HeroText = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-family: "Inter";
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.text};

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    font-size: 18px;
  }
`;

export const Hero = styled.div``;
