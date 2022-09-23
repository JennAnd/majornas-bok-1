import type { NextPage } from "next";
import { BookgridContainer } from "../Components/BookgridContainer/BookgridContainer";
import { Bookmark } from "../Components/Bookmark/Bookmark";
import { Footer } from "../Components/Footer/Footer";
import { Instagram } from "../Components/Instagram/Instagram";
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
  bookCard: [
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
  bookCard,
}) => {
  return (
    <div>
      <Navbar />
      <NewsHero newsInfo={newsInfo} />
      <HeroStripes heroStripesText={newsInfo}></HeroStripes>
      <BookgridContainer bookCard={bookCard} />
      <Bookmark text="Senaste på Instagram" color="#FFF4BF" />
      <Instagram />
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
  const bookCard = await SanityClient.fetch(`*[_type == 'book']{
    "imageUrl": cover.asset->url,
      ...
      }`);

  return {
    props: { newsInfo, openingHours, companyInfo, eventInfo, bookCard },
  };
};

export default Home;
