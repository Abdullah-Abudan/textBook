import React from "react";
import FlipPage from "react-flip-page";
import styled from "styled-components";
import LeftSide1 from "../LeftSide/LeftSide1";
import LeftSide2 from "../LeftSide/LeftSide2";
import LeftSide3 from "../LeftSide/LeftSide3";
import MidSide from "../MidSide";
import RightSide from "../RightSide";
import { BorderContainer } from "../BorderContainer";
import { BookContainer } from "../Container";

const FlipbookContainer = styled.div`
  direction: rtl;
  width: 49%;
`;

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
`;

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
      <div style={{display:"flex"}}>
        <FlipbookContainer>
          <FlipPage
          orientation="rtl"
          uncutPages
          pageBackground="#fff"
          flipOnTouch
          responsive
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
              <div style={{width:"2%"}}><MidSide/></div>
              <div  style={{width:"49%"}} ><RightSide/></div>
              </div>
      </BorderContainer>
      </BorderContainer>
      </BorderContainer>
      </BookContainer></>
      );
    };

export default MyAlbum;
