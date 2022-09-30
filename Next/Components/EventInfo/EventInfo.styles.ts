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
  padding-top: 20px;
  padding-bottom: 20px;

  @media (${({ theme }) => theme.breakpoint.tablet}) {
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    padding-left: 200px;
    width: 60%;
  }
`;
