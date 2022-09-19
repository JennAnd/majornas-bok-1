import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { BookCircleContainer } from "../Components/BookCircleContainer/BookCircleContainer";
import { Bookmark } from "../Components/Bookmark/Bookmark";
import { Button } from "../Components/Button/Button";
import { EventCard } from "../Components/EventCard/EventCard";
import { EventCardBig } from "../Components/EventCardBig/EventCardBig";
import { EventContainer } from "../Components/EventContainer/EventContainer";
import { Footer } from "../Components/Footer/Footer";
import { Navbar } from "../Components/Navbar/Navbar";
import { PopupOverlay } from "../Components/PopupOverlay/PopupOverlay";
import { Text } from "../Components/Text/Text";
import { Whitespace } from "../Components/Whitespace/Whitespace";
import { SanityClient } from "../SanityClient";

interface propInterface {
  companyInfo: {};
  openingHours: [{}];
  eventInfo: [
    {
      name: string;
      date: string;
      description: string | any;
      slug: string;
      image: string;
      imageUrl: string;
      _id: string;
    }
  ];
}

const Event: NextPage<propInterface> = ({
  openingHours,
  companyInfo,
  eventInfo,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      <Navbar />
      <Bookmark text="Författarkvällar" />
      {eventInfo.map((item, index) => {
        if (index === 0) {
          return <EventCardBig item={item} key={item._id} />;
        }
      })}
      <EventContainer>
        {eventInfo.map((item, index) => {
          if (index === 0) {
            return <></>;
          } else {
            return <EventCard item={item} key={item._id} />;
          }
        })}
        {showPopup && (
          <PopupOverlay
            onClick={() => {
              setShowPopup(!showPopup);
            }}
            eventInfo={selectedItem}
          />
        )}
      </EventContainer>
      <Bookmark text="Bokcirkel" />
      <BookCircleContainer>
        {width >= 768 ? (
          <Text
            text="Är du sugen på att vara med i en bokcirkel till hösten?"
            fontFamily="BigCaslon"
            fontSize="2.25rem"
          />
        ) : (
          <Text
            text="Är du sugen på att vara med i en bokcirkel till hösten?"
            fontFamily="BigCaslon"
            fontSize="1.75rem"
          />
        )}

        <Text
          text="Anmäl dig redan idag via formuläret. Vi ser fram emot att ditt deltagande!"
          fontFamily="DM Sans"
        />
        <Button
          text="Läs mer & anmäl dig här"
          margin="0rem 0rem 0rem 0rem"
          onClick={() => {
            setShowPopup(!showPopup);
          }}
        />
        <Whitespace />
      </BookCircleContainer>
      <Footer openingHours={openingHours} companyInfo={companyInfo} />
    </>
  );
};

export const getServerSideProps = async () => {
  const openingHours = await SanityClient.fetch(`*[_type == 'openingHours']`);
  const companyInfo = await SanityClient.fetch(`*[_type == "info"][0]`);
  const eventInfo = await SanityClient.fetch(`*[_type == 'event']{
    "imageUrl": image.asset->url,
      ...
    }`);
  return { props: { openingHours, companyInfo, eventInfo } };
};

export default Event;
