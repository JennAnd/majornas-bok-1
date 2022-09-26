import styled from "styled-components";

export const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.lightGreen};
  padding: ${({ theme }) => theme.padding.large};

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: row;
    gap: 4rem;
    height: 655px;
    justify-content: space-evenly;
    padding-bottom: 150px;
  }
`;
