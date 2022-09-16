import Image from "next/image";
import React, { useState } from "react";
import { SanityClient } from "../../SanityClient";
import { Button } from "../Button/Button";
import { PopupOverlay } from "../PopupOverlay/PopupOverlay";
import * as S from "./EventCard.styles";
import { EventCardProps } from "./EventCard.types";

export const EventCard: React.FC<EventCardProps> = ({ item, children }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <S.EventCardContainer>
      <S.DateContainer>{item.date}</S.DateContainer>
      <S.ImageContainer>
        <Image
          src={item.imageUrl}
          alt="Event image"
          layout="fill"
          objectFit="cover"
        />
      </S.ImageContainer>
      <S.NameContainer>{item.name}</S.NameContainer>

      <Button
        key={item._id}
        text={"Läs mer & anmäl dig här"}
        onClick={() => {
          setShowPopup(!showPopup);
          setSelectedItem(item);
        }}
        padding={".75rem 1rem"}
        margin={"0 0 2rem 0"}
        fontSize={"1rem"}
      />

      {showPopup && (
        <PopupOverlay
          onClick={() => {
            setShowPopup(!showPopup);
          }}
          eventInfo={selectedItem}
        />
      )}
    </S.EventCardContainer>
  );
};

export const getServerSideProps = async () => {
  const eventInfo = await SanityClient.fetch(`*[_type == 'event']{
    "imageUrl": image.asset->url,
      ...
    }`);
  return { props: { eventInfo } };
};
