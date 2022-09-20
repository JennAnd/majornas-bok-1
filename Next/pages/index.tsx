import type { NextPage } from "next";
import { Bookgrid } from "../Components/Bookgrid/Bookgrid";
import { Footer } from "../Components/Footer/Footer";
import { HeroStripes } from "../Components/HeroStripes/HeroStripes";
import { Navbar } from "../Components/Navbar/Navbar";
import { SanityClient } from "../SanityClient";

interface propInterface {
  heroStripesText: {
    firstText: string;
    secondText: string;
    thirdText: string;
  };

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

const Home: NextPage<propInterface> = ({
  heroStripesText,
  openingHours,
  companyInfo,
}) => {
  return (
    <div>
      <Navbar />
      <HeroStripes heroStripesText={heroStripesText}></HeroStripes>
      <Bookgrid />

      <Footer openingHours={openingHours} companyInfo={companyInfo} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const heroStripesText = await SanityClient.fetch(
    `*[_type == "heroStripes"][0]`
  );
  const openingHours = await SanityClient.fetch(`*[_type == 'openingHours']`);
  const companyInfo = await SanityClient.fetch(`*[_type == "info"][0]`);
  const eventInfo = await SanityClient.fetch(`*[_type == 'event']{
    "imageUrl": image.asset->url,
      ...
    }`);

  return { props: { heroStripesText, openingHours, companyInfo, eventInfo } };
};

export default Home;
