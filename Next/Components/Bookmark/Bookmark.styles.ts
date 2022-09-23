import styled from "styled-components";

export const BookmarkWrapper = styled.div`
  @media (${({ theme }) => theme.breakpoint.tablet}) {
    margin-bottom: -4rem;
    display: flex;
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
  }
`;

export const BookmarkContainer = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  height: 0;
  box-sizing: border-box;
  border-right: 25px solid transparent;
  border-top: 50px solid ${(props) => props.color};
  border-bottom: 50px solid ${(props) => props.color};
  padding: 0 ${({ theme }) => theme.padding.large};
  padding-left: 24px;

  font-family: ${({ theme }) => theme.font.BigCaslon};
  font-size: ${({ theme }) => theme.fontSize.h2};
  margin: ${({ theme }) => theme.margin.xLarge} 0;
  color: ${({ theme }) => theme.color.black};

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    width: 40%;
    font-size: ${({ theme }) => theme.fontSize.large};
    padding-left: 56px;
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    border-top: 90px solid ${(props) => props.color};
    border-bottom: 90px solid ${(props) => props.color};
    font-size: ${({ theme }) => theme.fontSize.xlarge};
    border-right: 80px solid transparent;
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
  }
`;
