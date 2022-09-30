import styled from "styled-components";

export const InfoDiv = styled.div`
  background-color: ${({ theme }) => theme.color.white};

  @media (${({ theme }) => theme.breakpoint.tablet}) {
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
  }
`;
export const BookmarkWrapper = styled.div`
  @media (${({ theme }) => theme.breakpoint.tablet}) {
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
  }
`;
export const TextDiv = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  display: flex;
  justify-content: center;

  @media (${({ theme }) => theme.breakpoint.tablet}) {
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
  }
`;

export const InfoText = styled.p`
  color: white;
  padding: 2rem 2rem;

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    padding: 2rem 5rem;
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    padding: 2rem 5rem;
    width: 80%;
    max-width: 60rem;
  }
`;
