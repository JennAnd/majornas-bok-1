import { useEffect } from "react";
import React from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const Instagram = () => {
  const username = "yrgo_bokhandel";
  const token =
    "IGQVJXdWZAnVWlSTm5rRkpPLUtkR2hSQnU4RjRseGYzYzI0MVdIYVBjQXE4cFJfSjM2dENxRVpUNXJ4M0hZAb3BJTWFSNXZAfUDI1V0RIVlB6TWNIQWZAtMUFkR2JBNGM4Vm1sX0w0ZAmFLUzc2cnU0SUgwYQZDZD";
  const id = "18046477966366219";

  const { data, error } = useSWR(
    `https://graph.instagram.com/${id}?fields=id,media_type,media_url,username,timestamp&access_token=${token}`,
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data);

  return <>HI</>;
};
