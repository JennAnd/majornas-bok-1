import type { NextPage } from "next";
import Link from "next/link";
import { useRef, useState } from "react";
import { Button } from "../Components/Button/Button";
import { Footer } from "../Components/Footer/Footer";
import { PopupOverlay } from "../Components/PopupOverlay/PopupOverlay";
import { SanityClient } from "../SanityClient";

interface propInterface {
  companyInfo: {};
  openingHours: [{}];
  events: [{}];
}

const Home: NextPage<propInterface> = ({
  openingHours,
  companyInfo,
  events,
}) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <Link href="sanityTestPage">Sanity test</Link>
      <Button text="Click me" onClick={() => setShowPopup(!showPopup)} />
      {showPopup && <PopupOverlay />}
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
  const eventInfo = await SanityClient.fetch(`*[_type == "event"]`);

  return { props: { openingHours, companyInfo } };
};

export default Home;
