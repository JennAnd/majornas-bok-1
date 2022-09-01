import type { NextPage } from "next";
import Link from "next/link";
import { SanityClient } from "../Sanity/SanityClient";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Link href="sanityTestPage">Sanity test</Link>
    </div>
  );
};

export default Home;
