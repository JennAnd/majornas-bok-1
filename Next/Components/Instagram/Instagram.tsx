import { useEffect } from "react";
import React from "react";
import useSWR from "swr";
import Image from "next/image";

const Display = ({ image }) => {
  return (
    <img src={image} alt="Picture of the author" width={500} height={500} />
  );
};

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const Instagram = () => {
  const username = "yrgo_bokhandel";
  const token =
    "IGQVJXdWZAnVWlSTm5rRkpPLUtkR2hSQnU4RjRseGYzYzI0MVdIYVBjQXE4cFJfSjM2dENxRVpUNXJ4M0hZAb3BJTWFSNXZAfUDI1V0RIVlB6TWNIQWZAtMUFkR2JBNGM4Vm1sX0w0ZAmFLUzc2cnU0SUgwYQZDZD";
  const id = "18046477966366219";

  const { data, error } = useSWR(
    `https://graph.instagram.com/me/media?fields=id,media_url,username,caption&access_token=${token}`,
    fetcher
  );
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const Images = data.data.map((image) => console.log(image.media_url));

  return (
    <div>
      {data.data.map((image) => (
        <Display image={image.media_url} key="Instagram" />
      ))}
    </div>
  );
};
