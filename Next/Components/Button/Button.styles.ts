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
  font-family: ${({ theme }) => theme.font.DMSans};
  color: white;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.grey};
  }
`;
