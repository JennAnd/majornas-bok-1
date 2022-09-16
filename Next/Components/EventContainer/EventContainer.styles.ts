import styled from "styled-components";

export const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.lightGreen};
  padding: ${({ theme }) => theme.padding.large};
`;
