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
  padding-bottom: 80px;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
  }
`;

export const ReviewText = styled.p`
  font-size: 16px;
  font-family: "Big Casio";
  text-align: center;
  color: ${({ theme }) => theme.color.black};
  padding: 5px;
  padding-top: 0px;
  margin-top: 0px;

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 24px;
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    font-size: 32px;
    padding: 20px;
  }
`;

export const ImageWrapper = styled.div`
  text-align: right;
  z-index: 1;
  margin: 0px;
  margin-top: -10px;
  margin-right: -10px;
  padding-top: 0px;
  padding-right: 0px;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
  }
`;

export const ReviewNoteOne = styled.div`
  background-color: white;
  padding: 0px;
  display: inline-block;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  width: 180px;
  margin-left: 30px;
  margin-top: 50px;

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    margin-left: 60px;
    width: 280px;
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    margin-left: 550px;
    width: 290px;
  }
`;

export const ReviewNoteTwo = styled.div`
  display: none;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    display: block;
    background-color: white;
    padding: 0px;
    display: inline-block;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    width: 465px;
    margin-left: 60px;
  }
`;

export const ReviewNoteThree = styled.div`
  background-color: white;
  display: inline-block;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  width: 166px;
  margin-top: 20px;
  margin-left: 185px;
  @media (${({ theme }) => theme.breakpoint.tablet}) {
    margin-left: 440px;
    width: 266px;
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    width: 359px;
    margin-left: 267px;
  }
`;

export const ReviewNoteFour = styled.div`
  background-color: white;
  display: inline-block;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  width: 175px;
  margin-left: 70px;
  margin-top: 40px;
  @media (${({ theme }) => theme.breakpoint.tablet}) {
    margin-left: 140px;
    width: 175px;
    margin-bottom: -30px;
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    width: 417px;
    margin-left: 140px;
  }
`;
