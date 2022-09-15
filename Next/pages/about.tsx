import type { NextPage } from "next";
import { Navbar } from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer/Footer";
import { SanityClient } from "../SanityClient";
import { CostumerReviews } from "../Components/CostumerReviews/CostumerReviews";

interface propInterface {
  companyInfo: {};
  openingHours: [{}];
  costumerReview: [{}];
}

const Home: NextPage<propInterface> = ({
  openingHours,
  companyInfo,
  costumerReview,
}) => {
  return (
    <div>
      {/* <Link href="sanityTestPage">Sanity test</Link> */}

      <Navbar />
      <CostumerReviews costumerReview={costumerReview} />

      <Footer openingHours={openingHours} companyInfo={companyInfo} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const openingHours = await SanityClient.fetch(`*[_type == 'openingHours']`);
  const companyInfo = await SanityClient.fetch(`*[_type == "info"][0]`);
  const costumerReview = await SanityClient.fetch(
    `*[_type == "costumerReview"][3]`
  );

  return { props: { openingHours, companyInfo, costumerReview } };
};

export default Home;
