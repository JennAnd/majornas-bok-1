import styled from "styled-components";

export const EnterPageContainer = styled.div`
  background: url("/Images/EnterPage/Enter-page-mobile.webp");
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-size: cover !important;
  background-repeat: no-repeat !important;

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    background: url("/Images/EnterPage/Enter-page-desktop.webp");
  }
`;
export const SignImageWrapperMobile = styled.div`
  display: block;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    display: none;
  }
`;
export const SignImageWrapperDesktop = styled.div`
display: none;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    display: block;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  top: 667px;
`;
