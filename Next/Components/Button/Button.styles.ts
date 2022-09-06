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
  padding: 0.5rem 1rem;
  min-height: 33px;
  font-size: 1rem;
  background-color: #585858;
  background-position: center;
  background-size: cover;
  color: white;
  white-space: nowrap;
  text-transform: capitalize;

  &:hover {
    cursor: pointer;
    color: red;
  }
`;
