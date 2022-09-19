import React, { FC } from "react";
import styled from "styled-components";
import Image from "next/image";

const BackgroundDiv = styled.div`
  background-color: pink;
  width: 600px;
  height: 600px;
`;

export const NewsHero: FC = () => {
  return (
    <BackgroundDiv>
      <Image
        src="/Images/NewsHero/ampersand.svg"
        alt=""
        width={500}
        height={500}
      />
    </BackgroundDiv>
  );
};
