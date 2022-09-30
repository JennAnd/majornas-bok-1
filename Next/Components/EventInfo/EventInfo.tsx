import React from "react";
import * as S from "./EventInfo.styles";
import { Bookmark } from "../Bookmark/Bookmark";

export const EventInfo = ({}) => {
  return (
    <S.InfoDiv>
      <S.BookmarkWrapper>
        <Bookmark text="Författarkvällar" color="#FEB28C" />
      </S.BookmarkWrapper>
      <S.TextDiv>
        <S.InfoText>
          Bokhandeln anordnar regelbundet författarkvällar. En rad
          uppmärksammade och intressanta författare har gästat bokhandeln.
          (foton från författarkvällar kommer!) <br></br>
          <br></br>Evenemangen är (med enstaka undantag) gratis, men både
          bokhandlare och författare uppskattar om man köper en bok! Om inte
          annat anges öppnas dörren 18.30 och så börjar det 19. Fika finns att
          köpa. <br></br>
          <br></br>Föranmälan krävs, anmäl dig i formuläret nedan.
        </S.InfoText>
      </S.TextDiv>
    </S.InfoDiv>
  );
};
