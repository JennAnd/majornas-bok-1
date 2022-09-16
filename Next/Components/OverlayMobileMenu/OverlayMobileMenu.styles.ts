import styled from "styled-components";

export const OverlayMenuWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  width: 375px;
  height: 667px;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  padding-left: 335px;
  padding-top: 30px;
`;

export const HeaderText = styled.p`
  font-family: "Courier New";
  font-size: 20.51px;
  font-weight: 700;
  line-height: 23.23px;
  text-align: center;
  margin-top: -20px;
  padding-right: 166px;
  padding-bottom: 86px;

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
