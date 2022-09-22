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
  width: 100wv;
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
  width: 100wv;
  background-color: ${({ theme }) => theme.color.black};
  padding-top: 32px;
  padding-right: 24px;
  padding-left: 24px;
  padding-bottom: 64px;

  @media (${({ theme }) => theme.breakpoint}) {
    padding-top: 57px;
    padding-right: 305px;
    padding-left: 99px;
    padding-bottom: 56px;
  }
`;

export const HeroText = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-family: "Inter";
  font-weight: 500;
  fontsize: 16px;
  line-height: 19.36px;
`;

export const Hero = styled.div``;
