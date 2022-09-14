import type { NextPage } from "next";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import internal from "stream";
import styles from "../styles/Home.module.css";

interface info {
  text: string;
  initial: number;
}

const Counter: FC<info> = (props) => {
  const [count, setCount] = useState(props.initial);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <h2>{props.text}</h2>
      <h2>{count}</h2>
      <button onClick={() => setCount((counting) => counting£ + 1)}>
        Click to increase
      </button>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Counter text="UWU" initial={10} />
      <Link href="sanityTestPage">Sanity test</Link>
    </div>
  );
};

export default Home;
