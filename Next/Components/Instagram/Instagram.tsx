import { useEffect } from "react";
import React from "react";
import useSWR from "swr";
import Image from "next/image";
import styled from "styled-components";

const Display = ({ image }) => {
  return (
    <StyledImage>
      <Image
        className="Picture"
        src={image}
        alt="Instagram picture"
        layout="fill"
        objectFit="cover"
      />
    </StyledImage>
  );
};

const StyledImage = styled.div`
  width: 18rem;
  height: 18rem;
  position: relative;

  @media (max-width: 1600px) {
    width: 14rem;
    height: 14rem;
  }

  @media (max-width: 1250px) {
    width: 10rem;
    height: 10rem;
  }

  @media (max-width: 1000px) {
    width: 12rem;
    height: 12rem;
  }
`;

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
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1000px) {
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
  // our instagram id is "18046477966366219";

  const { data, error } = useSWR(
    `https://graph.instagram.com/me/media?fields=id,media_url,username,caption&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`,
    fetcher
  );
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const Images = data.data.map((image) => console.log(image.media_url));

  return (
    <InstagramContainer>
      <ImageContainer>
        {data.data.map((image, key) => (
          <Display image={image.media_url} key={key} />
        ))}
      </ImageContainer>
      <Shelf />
    </InstagramContainer>
  );
};
