import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../Button/Button";
import { PopupOverlay } from "../PopupOverlay/PopupOverlay";
import * as S from "./EventCardBig.styles";
import { EventCardBigProps } from "./EventCardBig.types";

export const EventCardBig: React.FC<EventCardBigProps> = ({ item }) => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

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
          <S.SignUpButtonContainer>
            <Button
              text="Anmäl dig"
              width="100%"
              onClick={() =>
                ((window as Window).location = "mailto:info@majornasbocker.se")
              }
            />
          </S.SignUpButtonContainer>
          <S.ReadMoreAndSignUpButtonContainer>
            <Button
              key={item._id}
              text="Läs mer & anmäl dig här"
              onClick={() => {
                setShowPopup(!showPopup);
                setSelectedItem(item);
              }}
              margin="0 0 1rem 0"
              width="100%"
            />

            {showPopup && (
              <PopupOverlay
                onClick={() => {
                  setShowPopup(!showPopup);
                }}
                eventInfo={selectedItem}
              />
            )}
          </S.ReadMoreAndSignUpButtonContainer>
        </S.InfoWrapper>
      </S.RightContainer>
    </S.Overlay>
  );
};
