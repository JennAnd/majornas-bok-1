import styled from "styled-components";

export const ReviewWrapper = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.color.green};
  padding-top: 40px;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    padding-top: 40px;
  }
`;

export const BookmarkContainer = styled.div`
  margin-bottom: 0px;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    margin-bottom: 30px;
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
  font-family: ${({ theme }) => theme.font.BigCaslon};
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
  display: block;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  width: 180px;
  margin-left: 30px;
  margin-top: 10px;
  z-index: 2;

  @media (${({ theme }) => theme.breakpoint.tablet}) {
    margin-left: 60px;
    margin-top: 100px;
    width: 280px;
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    margin-left: 15%;
    width: 290px;
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    margin-left: 43%;
    margin-top: -200px;
  }
`;

export const ReviewNoteTwo = styled.div`
  display: none;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    display: block;
    background-color: white;
    padding: 0px;
    position: relative;
    padding: 10px;
    z-index: 2;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    width: 405px;
    margin-top: -200px;
    margin-left: 50%;
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    margin-left: 68%;
    margin-top: -210px;
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
    margin-left: 10%;
    margin-top: 150px;
    position: relative;
    z-index: 2;
  }

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    margin-left: 20%;
  }
`;

export const ReviewNoteFour = styled.div`
  background-color: white;
  display: inline-block;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  width: 175px;
  margin-left: 70px;
  margin-top: 40px;
  padding-bottom: 5px;
  @media (${({ theme }) => theme.breakpoint.tablet}) {
    margin-left: 140px;
    width: 175px;
    margin-bottom: -30px;
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    margin-left: 60%;
  }

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    width: 417px;
    margin-left: 50%;
    margin-top: -300px;
    margin-bottom: 150px;
    display: block;
    position: relative;
    z-index: 2;
  }
`;
