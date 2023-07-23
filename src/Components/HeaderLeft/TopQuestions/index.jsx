import React from "react";
import styled from "styled-components";

// img
import retweet from "../../../Images/retweet.png";
import mark from "../../../Images/q-mark.png";
import { Link } from "react-router-dom";
// Styled components
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding: 10px 20px;
`;



const Right = styled.h6`
  text-align: right !important;
  color: #343a40!important;
  font-size: 1rem;
`;

const Left = styled.div`
display: flex;
align-items: center;
gap:6px;
color: #dc3545!important;
`;

// Component
function TopQ(props) {
  return (
    
    <Row >
        <Right>
            <Link to={props.link} style={{color:"black"}}><bdi>?</bdi>السؤال {props.title}</Link> :
        </Right>

        <Left>
        <img src={mark}/> 
        <span>علامة السؤال : 40</span>
        <img src={retweet}/> 
        </Left>

    </Row>
  );
}

export default TopQ;
