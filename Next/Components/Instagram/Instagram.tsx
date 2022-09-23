import { useEffect } from "react";
import React from "react";
import useSWR from "swr";
import Image from "next/image";
import styled from "styled-components";

const Display = ({ image }) => {
  return <img src={image} alt="Picture of the author" />;
};

const Shelf = styled.div`
  background: ${({ theme }) => theme.color.black};
  width: 100%;
  height: 2rem;

  @media (max-width: 1000px) {
    width: 80rem;
  }
`;

const ImageContainer = styled.div`
  padding: 0rem 2rem;

  display: flex;
  justify-content: space-around;/v/t51.29350-15/307983666_2125345730983648_2862442340684326019_n.jpg
  align-items: center;
  img {
    width: 18rem;
    height: 18rem;
  }

  @media (max-width: 1600px) {
    img {
      width: 14rem;
      height: 14rem;
    }
  }

  @media (max-width: 1250px) {
    img {
      width: 10rem;
      height: 10rem;
    }
  }

  @media (max-width: 1000px) {
    img {
      width: 12rem;
      height: 12rem;
    }
    width: 80rem;
  }
`;

const InstagramContainer = styled.div`
  height: 35rem;

  background: ${({ theme }) => theme.color.blue};

  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1000px) {
    white-space: nowrap;
    overflow: scroll;
    overflow-y: hidden;
  }
`;

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
    <InstagramContainer>
      <ImageContainer>
        {data.data.map((image) => (
          <Display image={image.media_url} key="Instagram" />
        ))}
      </ImageContainer>
      <Shelf />
    </InstagramContainer>
  );
};
