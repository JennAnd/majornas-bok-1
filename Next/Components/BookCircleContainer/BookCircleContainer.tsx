import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import * as S from "./BookCircleContainer.styles";

export const BookCircleContainer = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <S.BookCircleContainer>
      {width < 1024 ? (
        <>
          <S.LeftContainer>
            <Text
              text="Är du sugen på att vara med i en bokcirkel till hösten?"
              fontFamily="BigCaslon"
              fontSize="1.75rem"
            />
            <Text
              text="Anmäl dig redan idag via formuläret. Vi ser fram emot att ditt deltagande!"
              fontFamily="DM Sans"
            />
            <Button
              text="Läs mer & anmäl dig här"
              margin="0rem 0rem 8rem 0rem"
              width="100%"
              onClick={() => {
                setShowPopup(!showPopup);
              }}
            />
          </S.LeftContainer>
        </>
      ) : (
        <>
          <S.LeftContainer>
            <Text
              text="Är du sugen på att vara med i en bokcirkel till hösten?"
              fontFamily="BigCaslon"
              fontSize="2.25rem"
            />
            <Text
              text="Anmäl dig redan idag via formuläret. Vi ser fram emot att ditt deltagande!"
              fontFamily="DM Sans"
            />
            <Button
              text="Anmäl dig här"
              margin="3rem 0rem 0rem 0rem"
              width="100%"
              onClick={() =>
                ((window as Window).location = "mailto:info@majornasbocker.se")
              }
            />
          </S.LeftContainer>
          <S.RightContainer>
            <S.ImageContainer>
              <Image
                src="/Images/StockImages/varad-parulekar-unsplash-webp.webp"
                alt="Picture of a pile of books"
                layout="fill"
                objectFit="cover"
              />
            </S.ImageContainer>
            <S.TextTitle>Novellbokcirkel</S.TextTitle>
            <S.TextBody>
              Den första träffen hålls den 20/9 och inför detta tillfälle läser
              vi “Öknens alla blommor” av Per Olov Enquist.
            </S.TextBody>
            <S.TextTitle>Pocketbokcirkel</S.TextTitle>
            <S.TextBody>
              Den första träffen hålls den 27/9 och inför detta tillfälle läser
              vi “Klara och solen” Kazuo Ishiguro.
            </S.TextBody>
          </S.RightContainer>
        </>
      )}
    </S.BookCircleContainer>
  );
};
