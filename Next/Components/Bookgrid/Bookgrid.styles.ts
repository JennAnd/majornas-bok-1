import styled from "styled-components";

export const Bookdiv = styled.div`
  width: 150px;
  height: 260px;
  margin: 20px;
  @media (min-width: 768px) {
    width: 285px;
    height: 414px;
  }
  @media (min-width: 1024px) {
    width: 380px;
    height: 552px;
  }
`;

export const BookName = styled.p`
  font-family: "Courier New", Courier, monospace;
  color: #292929;
  font-size: 16px;
  padding: 0px;
  padding-top: 8px;
  margin: 0px;

  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const AuthorName = styled.p`
  font-family: "Courier New", Courier, monospace;
  color: #292929;
  font-size: 16px;
  padding: 0px;
  padding-top: 8px;
  margin: 0px;

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const ImgContainer = styled.div``;
