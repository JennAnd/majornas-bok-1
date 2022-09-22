import type { NextPage } from "next";
import { Bookgrid } from "../Components/Bookgrid/Bookgrid";
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
      <Instagram />
      <Navbar />
      {/* <NewsHero newsInfo={newsInfo} /> */}
      <Bookgrid book={bookGrid} />
      {/* <HeroStripes heroStripesText={newsInfo}></HeroStripes> */}
      <BookgridContainer bookGrid={bookGrid} />
      <Bookmark text="Nyinkomna böcker" />
      <Bookgrid book={bookGrid} />
      <Bookmark text="Senaste på Instagram" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veritatis
        mollitia. Doloremque laboriosam dolorum adipisci ullam odit minus nulla
        consequuntur ab? Incidunt porro libero saepe voluptatem consequatur.
        Voluptate, saepe fuga.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veritatis
        mollitia. Doloremque laboriosam dolorum adipisci ullam odit minus nulla
        consequuntur ab? Incidunt porro libero saepe voluptatem consequatur.
        Voluptate, saepe fuga.
      </p>
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
