import React from "react";
import FlipPage from "react-flip-page";
import LeftSide1 from "../LeftSide/LeftSide1";
import LeftSide2 from "../LeftSide/LeftSide2";
import LeftSide3 from "../LeftSide/LeftSide3";
import MidSide from "../MidSide";
import RightSide from "../RightSide";
import { BorderContainer } from "../BorderContainer";
import { BookContainer } from "../Container";
import { DivFlex, DivMid, DivRight, FlipbookContainer, PageContent } from "./style";



const MyAlbum = () => {
  const pages = [
    { content: <LeftSide1/>, number: "1" },
    { content: <LeftSide2/>, number: "2" },
    { content: <LeftSide3 />, number: "3" },
  ];
  
  return (
    <>
    <BookContainer>
    <BorderContainer>
    <BorderContainer>
    <BorderContainer>
      <DivFlex>
        <FlipbookContainer>
          <FlipPage
          orientation="rtl"
          uncutPages
          pageBackground="#fff"
          flipOnTouch
          responsive
          animationDuration	 ="500"
          >
            {pages.map((page, index) => (
            <article key={index}>
              <PageContent>{page.content}</PageContent>
              </article>
              )
              )
              }
              </FlipPage>
              </FlipbookContainer>
              <DivMid>
                <MidSide/>
              </DivMid>

              <DivRight>
                <RightSide/>
              </DivRight>

              </DivFlex>
      </BorderContainer>
      </BorderContainer>
      </BorderContainer>
      </BookContainer></>
      );
    };

export default MyAlbum;
