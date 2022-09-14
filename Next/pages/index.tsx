import type { NextPage } from "next";
import { useState } from "react";
import { Footer } from "../Components/Footer/Footer";
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
      _key: string;
    }
  ];
}

const Home: NextPage<propInterface> = ({ openingHours, companyInfo }) => {
  return (
    <div>
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

export default Home;
