import type { NextPage } from "next";
import { useState } from "react";
import { Bookmark } from "../Components/Bookmark/Bookmark";
import { Button } from "../Components/Button/Button";
import { EventCard } from "../Components/EventCard/EventCard";
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
}

const Event: NextPage<propInterface> = ({
  openingHours,
  companyInfo,
  eventInfo,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <Navbar />
      <Bookmark text="Författarkvällar" />
      <EventContainer>
        {eventInfo.map((item) => {
          return (
            <>
              <EventCard eventInfo={item} />
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
            </>
          );
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
