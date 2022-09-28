import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { BookCircleContainer } from "../Components/BookCircleContainer/BookCircleContainer";
import { Bookmark } from "../Components/Bookmark/Bookmark";
import { EventCard } from "../Components/EventCard/EventCard";
import { EventCardBig } from "../Components/EventCardBig/EventCardBig";
import { EventContainer } from "../Components/EventContainer/EventContainer";
import { Footer } from "../Components/Footer/Footer";
import { Navbar } from "../Components/Navbar/Navbar";
import { PopupOverlay } from "../Components/PopupOverlay/PopupOverlay";
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
  bookCircle: [
    {
      name: string;
      date: string;
      description: string;
      slug: string;
      image: string;
      _id: string;
      imageUrl: string;
    }
  ];
}

const Event: NextPage<propInterface> = ({
  openingHours,
  companyInfo,
  eventInfo,
  bookCircle,
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
      <Bookmark text="Författarkvällar" color="#FEB28C" />
      {eventInfo.map((item, index) => {
        if (index === 0) {
          return <EventCardBig item={item} key={`EventCardBig-${item._id}`} />;
        }
      })}
      <EventContainer>
        {eventInfo.map((item, index) => {
          if (index === 0) {
            return null;
          } else {
            return <EventCard item={item} key={`EventCard-${item._id}`} />;
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
      {width < 1024 ? (
        <Bookmark
          text="Bokcirkel"
          color="#FEB28C"
          backgroundColor="#D0E9D4"
          margin="0px"
        />
      ) : (
        <Bookmark text="Bokcirkel" color="#FEB28C" backgroundColor="#D0E9D4" />
      )}

      <BookCircleContainer bookCircle={bookCircle} />
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
  const bookCircle = await SanityClient.fetch(`*[_type == 'bookCircle'][0..1]`);

  return { props: { openingHours, companyInfo, eventInfo, bookCircle } };
};

export default Event;
