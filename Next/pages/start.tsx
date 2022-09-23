import type { NextPage } from "next";

import { BookgridContainer } from "../Components/BookgridContainer/BookgridContainer";
import { Bookmark } from "../Components/Bookmark/Bookmark";
import { Footer } from "../Components/Footer/Footer";
import { Navbar } from "../Components/Navbar/Navbar";
import { HeroStripes } from "../Components/NewsHero/HeroStripes/HeroStripes";
import { NewsHero } from "../Components/NewsHero/NewsHero";
import { SanityClient } from "../SanityClient";

interface propInterface {
  newsInfo: {
    h1: string;
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
  bookGrid: [
    {
      title?: string;
      author?: string;
      cover?: string;
      imageUrl?: string;
    }
  ];
}

const Home: NextPage<propInterface> = ({
  newsInfo,
  openingHours,
  companyInfo,
  bookGrid,
}) => {
  return (
    <div>
      <Navbar />
      <NewsHero newsInfo={newsInfo} />
      <Bookmark text="Nyinkomna böcker" />
      <HeroStripes heroStripesText={newsInfo}></HeroStripes>
      <BookgridContainer bookCard={bookGrid} />
      <Bookmark text="Senaste på Instagram" />
      {/* Put instagram here */}
      <Footer openingHours={openingHours} companyInfo={companyInfo} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const newsInfo = await SanityClient.fetch(`*[_type == "newsHero"][0]`);
  const openingHours = await SanityClient.fetch(`*[_type == 'openingHours']`);
  const companyInfo = await SanityClient.fetch(`*[_type == "info"][0]`);
  const eventInfo = await SanityClient.fetch(`*[_type == 'event']{
    "imageUrl": image.asset->url,
      ...
    }`);
  const bookGrid = await SanityClient.fetch(`*[_type == 'book']{
    "imageUrl": cover.asset->url,
      ...
      }`);

  return {
    props: { newsInfo, openingHours, companyInfo, eventInfo, bookGrid },
  };
};

export default Home;
