import React from "react";
import * as S from "./EnterPage.styles";
import { Button } from "../Button/Button";
import Link from "next/link";
import Image from "next/image";

export const EnterPage = () => {
  return (
    <S.EnterPageContainer>
      {" "}
      <S.SignImageWrapperMobile>
        <Image
          src="/Icons/Sign-mobile.svg"
          alt="sign"
          width={331}
          height={419}
        />
      </S.SignImageWrapperMobile>
      <S.SignImageWrapperDesktop>
        <Image
          src="/Icons/Sign-desktop.svg"
          alt="sign"
          width={600}
          height={759}
        />
      </S.SignImageWrapperDesktop>
      <Link href="/start">
        <S.ButtonWrapper>
          <Button text="Till hemsidan" padding="8px" />
        </S.ButtonWrapper>
      </Link>
    </S.EnterPageContainer>
  );
};
