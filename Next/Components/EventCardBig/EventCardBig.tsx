import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../Button/Button";
import * as S from "./EventCardBig.styles";
import { EventCardBigProps } from "./EventCardBig.types";

export const EventCardBig: React.FC<EventCardBigProps> = ({
  item,
  onClick,
  text,
}) => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const handleNameChange = (event) => {
    setInputName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setInputEmail(event.target.value);
  };

  return (
    <S.Overlay>
      <S.LeftContainer>
        <S.DateContainer>{item.date}</S.DateContainer>
        <S.ImageContainer>
          <Image
            src={item.imageUrl}
            alt="Event image"
            layout="fill"
            objectFit="cover"
          />
        </S.ImageContainer>
      </S.LeftContainer>

      <S.RightContainer>
        <S.NameContainer>{item.name}</S.NameContainer>
        <S.InfoWrapper>
          <S.DescriptionContainer>
            {item.description[0].children[0].text}
          </S.DescriptionContainer>
          <S.SignUpWrapper>
            <S.SignUpContainer>
              Anmäl dig till författarkvällen
            </S.SignUpContainer>
            <S.NameAndMail>Namn</S.NameAndMail>
            <S.Input
              onChange={handleNameChange}
              value={inputName}
              placeholder="Namn Efternamn"
              type={"text"}
            />
            <S.NameAndMail>Mailadress</S.NameAndMail>
            <S.Input
              onChange={handleEmailChange}
              value={inputEmail}
              placeholder="namn.efternamn@email.com"
              type={"email"}
            />
          </S.SignUpWrapper>
          <Button
            text="Anmäl dig"
            width="100%"
            padding={".75rem 1rem"}
            fontSize={"1rem"}
            onClick={() =>
              ((window as Window).location = "mailto:info@majornasbocker.se")
            }
          />
        </S.InfoWrapper>
      </S.RightContainer>
    </S.Overlay>
  );
};
