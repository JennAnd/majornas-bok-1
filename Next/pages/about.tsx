import type { NextPage } from "next";
import { Navbar } from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer/Footer";
import { SanityClient } from "../SanityClient";

interface propInterface {
  companyInfo: {};
  openingHours: [{}];
}

const Home: NextPage<propInterface> = ({ openingHours, companyInfo }) => {
  return (
    <div>
      {/* <Link href="sanityTestPage">Sanity test</Link> */}

      <Navbar />

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
