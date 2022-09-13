import type { NextPage } from "next";
import Link from "next/link";
import { Footer } from "../Components/Footer/Footer";
import { SanityClient } from "../SanityClient";

interface propInterface {
  companyInfo: {};
  openingHours: [{}];
}

const Home: NextPage<propInterface> = ({ openingHours, companyInfo }) => {
  return (
    <div>
      <Link href="sanityTestPage">Sanity test</Link>
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
  const openingHours = await SanityClient.fetch(`*[_type == 'openingHours']`);
  const companyInfo = await SanityClient.fetch(`*[_type == "info"][0]`);

  return { props: { openingHours, companyInfo } };
};

export default Home;
