import styled from "styled-components";

export const EnterPageContainer = styled.div`
  background: url("/Images/EnterPage/Enter-page-mobile.webp");
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-size: contain !important;
  background-repeat: no-repeat !important;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    background: url("/Images/EnterPage/Enter-page-desktop.webp");
  }
`;
