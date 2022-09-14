import type { NextPage } from "next";
import Link from "next/link";
import { Navbar } from "../Components/Navbar/Navbar";
import styles from "../styles/Home.module.css";
import { HeroStripes } from "../Components/HeroStripes/HeroStripes";
import { Bookgrid } from "../Components/Bookgrid/Bookgrid";
import { Footer } from "../Components/Footer/Footer";
import { SanityClient } from "../SanityClient";

interface propInterface {
  heroStripesText: {
    firstText: string;
    secondText: string;
    thirdText: string;
  };

  companyInfo: {};
  openingHours: [{}];
}

const Home: NextPage<propInterface> = ({
  heroStripesText,
  openingHours,
  companyInfo,
}) => {
  return (
    <div>

      {/* <Link href="sanityTestPage">Sanity test</Link> */}

      <Navbar />

      <HeroStripes heroStripesText={heroStripesText}></HeroStripes>

      <Link href="sanityTestPage">Sanity test</Link>
      <Bookgrid />


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

  return { props: { heroStripesText, openingHours, companyInfo } };
};

export default Home;
