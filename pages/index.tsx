import type { NextPage } from "next";
import { SanityClient } from "../Sanity/SanityClient";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const query = '*[_type == "movie"]{title, releaseDate}';

  const movieQuery = SanityClient.fetch(query).then((movies) => {
    console.log("All the movies");
    movies.forEach((movie: any) => {
      console.log(`${movie.title}, ${movie.releaseDate}`);
    });
  });

  return <div className={styles.container}>hej</div>;
};

export default Home;
