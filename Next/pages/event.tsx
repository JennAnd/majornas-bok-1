import type { NextPage } from "next";
import Link from "next/link";
import { useRef, useState } from "react";
import { Button } from "../Components/Button/Button";
import { Footer } from "../Components/Footer/Footer";
import { PopupOverlay } from "../Components/PopupOverlay/PopupOverlay";
import { SanityClient } from "../SanityClient";

interface propInterface {
  companyInfo: {};
  openingHours: [{}];
  eventInfo: [
    {
      name: string;
      date: string;
      description: string;
      slug: string;
      image: string;
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
    <div>
      {eventInfo.map((item) => {
        return (
          <Button
            key={item._id}
            text={item.name}
            onClick={() => {
              setShowPopup(!showPopup);
              setSelectedItem(item);
            }}
          />
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

      <Footer openingHours={openingHours} companyInfo={companyInfo} />
    </div>
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
