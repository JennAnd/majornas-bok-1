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
  bookGrid: [
    {
      title: string;
      author: string;
      cover: string;
      imageUrl: string;
    }
  ];
}

const Home: NextPage<propInterface> = ({
  heroStripesText,
  openingHours,
  companyInfo,
  bookGrid,
}) => {
  return (
    <div>
      {/* <Link href="sanityTestPage">Sanity test</Link> */}

      <Navbar />
      <HeroStripes heroStripesText={heroStripesText}></HeroStripes>

      {bookGrid.map((book, index) => {
        if (index === 0) {
          return null;
        } else {
          return <Bookgrid book={book} key={1} />;
        }
      })}

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
  const heroStripesText = await SanityClient.fetch(
    `*[_type == "heroStripes"][0]`
  );
  const openingHours = await SanityClient.fetch(`*[_type == 'openingHours']`);
  const companyInfo = await SanityClient.fetch(`*[_type == "info"][0]`);
  const eventInfo = await SanityClient.fetch(`*[_type == 'event']{
    "imageUrl": image.asset->url,
      ...
    }`);
  const bookGrid = await SanityClient.fetch(`*[_type == 'books']{
      "imageUrl": image.asset->url,
        ...
      }`);

  return {
    props: { heroStripesText, openingHours, companyInfo, eventInfo, bookGrid },
  };
};

export default Home;
