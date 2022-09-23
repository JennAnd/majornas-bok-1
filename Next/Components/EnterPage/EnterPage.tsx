import React from "react";
import * as S from "./EnterPage.styles";
import { Button } from "../Button/Button";
import Link from "next/link";

export const EnterPage = () => {
  return (
    <S.EnterPageContainer>
      {" "}
      <Link href="/">
        <Button text="Till hemsidan" margin="40rem 50vw 0 50vw" padding="8px" />
      </Link>
    </S.EnterPageContainer>
  );
};
