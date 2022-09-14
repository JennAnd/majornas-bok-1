import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { HeroStripes } from "../Components/HeroStripes/HeroStripes";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeroStripes first_text="BOOK BOOK BOOK"></HeroStripes>
      <Link href="sanityTestPage">Sanity test</Link>
    </div>
  );
};

export default Home;
