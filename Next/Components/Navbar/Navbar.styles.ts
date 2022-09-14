import styled from "styled-components";

export const NavWrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 96px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 16px;
  padding-bottom: 0;

  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
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
  color: white;

  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const ImageWrapper = styled.div`
  padding-top: 30px;
  cursor: pointer;
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const NavMenu = styled.div`
  display: none;
  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    display: block;
    display: flex;
    justify-content: space-evenly;
    gap: 140px;
    color: white;
    font-family: "Big Caslon";
    font-weight: 500;
    font-size: 20px;
    line-height: 24.18px;
    text-decoration: none;
    a {
      color: white;
      text-decoration: none;
    }
  }
`;

export const Nav = styled.nav``;
