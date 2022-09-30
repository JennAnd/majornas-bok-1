import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import * as S from "./BookCircleContainer.styles";
import { BookCircleContainerProps } from "./BookCircleContainer.types";

export const BookCircleContainer: React.FC<BookCircleContainerProps> = ({
  bookCircle,
}) => {
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
              text="Anmäl dig redan idag via knappen nedan. Vi ser fram emot att ditt deltagande!"
              fontFamily="DM Sans"
            />
            <Button
              text="Anmäl dig här"
              margin="0rem 0rem 8rem 0rem"
              width="100%"
              onClick={() =>
                ((window as Window).location = "mailto:info@majornasbocker.se")
              }
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
              text="Anmäl dig redan idag via knappen nedan. Vi ser fram emot att ditt deltagande!"
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
                priority={true}
              />
            </S.ImageContainer>
            {/* <S.TextBody>{bookCircle.description}</S.TextBody> */}
            <S.TextBody>
              Vill du vara med i en bokcirkel så kan du vara det här! För
              närvarande är det en pocketbokcirkel och en novellbokcirkel igång,
              båda grupperna träffas var fjärde vecka. Böckerna som läses väljer
              vi gemensamt. Träffarna sker på tisdagskvällar vid 18. <br />
              <br /> Det finns även en novellbokcirkel för föräldralediga som
              träffas dagtid var fjortonde dag. Lämpar sig bäst för mindre barn
              som inte börjat gå ännu. Ett roligt sätt för både barn och
              föräldrar att träffas på! <br />
              <br />
              Är du med i en grupp som träffas regelbundet och hittar på saker?
              Om ni är intresserade av en kväll i bokhandeln där ni får enklare
              förtäring och får höra berättas om aktuella böcker så maila för
              mer info.
            </S.TextBody>
          </S.RightContainer>
        </>
      )}
    </S.BookCircleContainer>
  );
};
