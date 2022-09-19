import styled from "styled-components";

export const Button = styled.button`
  vertical-align: middle;
  cursor: pointer;
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  border: 0;
  text-decoration: none;
  overflow: hidden;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.color.black};
  background-position: center;
  background-size: cover;
  font-size: ${({ theme }) => theme.fontSize.text};
  font-family: ${({ theme }) => theme.font.DMSans};
  color: white;
  white-space: nowrap;
  padding: 12px 0;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.grey};
  }

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme }) => theme.fontSize.text};
    padding: 12px 12px;
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    font-size: ${({ theme }) => theme.fontSize.h2};
    padding: 16px 0;
  }
`;
