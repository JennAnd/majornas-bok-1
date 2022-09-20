import styled from "styled-components";

export const OverlayMenuWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 10;
  @media (${({ theme }) => theme.breakpoint.desktop}) {
    display: none;
  }
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  padding-left: 84%;
  padding-top: 30px;
  @media (min-width: 500px) {
    padding-left: 88%;
  }
  @media (min-width: 700px) {
    padding-left: 92%;
  }
`;

export const HeaderText = styled.p`
  font-family: "Courier New";
  font-size: 20.51px;
  font-weight: 700;
  line-height: 23.23px;
  text-align: center;
  margin-top: -20px;
  padding-right: 10.37rem;
  padding-bottom: 86px;
  @media (min-width: 500px) {
    padding-right: 60%;
  }
  @media (min-width: 700px) {
    padding-right: 70%;
  }

  color: ${({ theme }) => theme.color.white};
`;

export const MenuTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 104px;
  font-family: "Big Caslon";
  font-weight: 500;
  font-size: 30px;
  line-height: 36.27px;
  text-align: center;
  margin-top: 20px;

  a {
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
  }
`;
