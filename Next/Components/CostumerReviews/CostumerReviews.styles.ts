import styled from "styled-components";

export const ReviewWrapper = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.color.green};

  @media (${({ theme }) => theme.breakpoint.desktop}) {
  }
`;

export const ReviewContainer = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.color.green};

  @media (${({ theme }) => theme.breakpoint.desktop}) {
  }
`;

export const ReviewText = styled.p`
  font-size: 16px;
  font-family: "Big Casio";
  text-align: center;
  color: ${({ theme }) => theme.color.black};
  padding: 20px;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    font-size: 32px;
  }
`;

export const ImageWrapper = styled.div`
  text-align: right;
  z-index: 1;
  padding-top: 0px;
  padding-right: 0px;
  margin: 0px;
  @media (${({ theme }) => theme.breakpoint.desktop}) {
  }
`;

export const ReviewNoteOne = styled.div`
  background-color: white;
  padding: 0px;
  display: inline-block;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    width: 280px;
  }
`;

export const ReviewNoteTwo = styled.div`
  background-color: white;
  display: inline-block;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    width: 280px;
  }
`;

export const ReviewNoteThree = styled.div`
  background-color: white;
  display: inline-block;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    width: 280px;
  }
`;

export const ReviewNoteFour = styled.div`
  background-color: white;
  display: inline-block;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    width: 280px;
  }
`;
