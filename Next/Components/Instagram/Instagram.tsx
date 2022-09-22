import { useEffect } from "react";
import React from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const Instagram = () => {
  const username = "yrgo_bokhandel";

  const { data, error } = useSWR(
    "https://instagram.com/${username}/?__a=1",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data);

  return <>HI</>;
};
