import styled from "styled-components";

export const NavWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 96px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 0;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    height: 64px;
    padding: 0px;
    align-items: center;
    padding-left: 40px;
    padding-right: 40px;
  }
`;

export const NavText = styled.p`
  font-family: "Courier New";
  font-size: 20.51px;
  font-weight: 700;
  line-height: 23.23px;
  cursor: pointer;
  text-align: center;
  padding-left: 24px;
  color: ${({ theme }) => theme.color.white};
`;

export const ImageWrapper = styled.div`
  padding-top: 30px;
  cursor: pointer;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    display: none;
  }
`;

export const NavMenu = styled.div`
  display: none;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    display: block;
    display: flex;
    justify-content: space-evenly;
    gap: 140px;
    font-family: "Big Caslon";
    font-weight: 500;
    font-size: 20px;
    line-height: 24.18px;
    text-decoration: none;
    a {
      color: ${({ theme }) => theme.color.white};
      text-decoration: none;
    }
  }
`;

export const LinkWrapper = styled.div<{ active: boolean }>`
  text-decoration: underline;
  ${(props) =>
    props.active &&
    `
    text-decoration: underline;
    color: #FFF;
    `}
`;

export const Nav = styled.nav``;
