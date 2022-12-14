import styled from "styled-components";
import useSWR from "swr";
import { Bookmark } from "../Bookmark/Bookmark";

const Display = ({ image, onClick }) => {
  return <StyledImage src={image} onClick={onClick} />;
};

const StyledImage = styled.img`
  width: 20rem;
  height: 20rem;
  position: relative;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    width: 260px;
    height: 260px;
  }
`;

const Shelf = styled.div`
  background: ${({ theme }) => theme.color.black};
  height: 2rem;
  width: 110rem;
  margin-top: -15px;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 110rem;

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    width: 100%;
  }
`;

const InstagramWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  white-space: nowrap;
  overflow: scroll;
  overflow-y: hidden;

  @media (${({ theme }) => theme.breakpoint.desktop}) {
  }
`;

const InstagramContainer = styled.div`
  background: ${({ theme }) => theme.color.blue};
  margin-top: 150px;
  padding-bottom: 200px;
  padding-top: 100px;

  @media (${({ theme }) => theme.breakpoint.largeScreen}) {
    padding-bottom: 250px;
    margin-top: 100px;
    padding-top: 150px;
  }
`;

const BookmarkWrapper = styled.div`
  margin-bottom: -220px;
  @media (${({ theme }) => theme.breakpoint.desktop}) {
    margin-bottom: -200px;
  }
`;

const fetcher = (link) => fetch(link).then((res) => res.json());

export const Instagram = () => {
  const { data, error } = useSWR(
    `https://graph.instagram.com/me/media?fields=id,media_url,username,caption&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`,
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <BookmarkWrapper>
        <Bookmark text="Senaste på Instagram" color="#FFF4BF" />
      </BookmarkWrapper>
      <InstagramContainer>
        <InstagramWrapper>
          <ImageContainer>
            {data.data.map((image, key) => (
              <Display
                image={image.media_url}
                key={key}
                onClick={() =>
                  open("https://www.instagram.com/yrgo_yrgo_yrgo/", "_blank")
                }
              />
            ))}
          </ImageContainer>
        </InstagramWrapper>
        <Shelf />
      </InstagramContainer>
    </>
  );
};
