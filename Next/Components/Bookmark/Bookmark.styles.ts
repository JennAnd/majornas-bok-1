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
  border-top: 50px solid ${({ theme }) => theme.color.peach};
  border-bottom: 50px solid ${({ theme }) => theme.color.peach};
  padding: 0 ${({ theme }) => theme.padding.large};

  font-family: ${({ theme }) => theme.font.BigCaslon};
  font-size: ${({ theme }) => theme.fontSize.h2};
  margin: ${({ theme }) => theme.margin.xLarge} 0;
  color: ${({ theme }) => theme.color.black};

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    width: 40%;
    font-size: ${({ theme }) => theme.fontSize.large};
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
  }
`;
