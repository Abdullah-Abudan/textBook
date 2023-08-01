import React from "react";

import { Link } from "react-router-dom";
import { Left, Right, Row } from "./style";

// img
import swap from "../../../Images/swap.png";
import mark from "../../../Images/q-mark.png";

function TopQuestion(props) {
  return (
    
    <Row>
        <Right>
            <Link to={props.link} style={{color:"black"}}><bdi>?</bdi>السؤال {props.title}</Link> :
        </Right>

        <Left>
        <img src={mark} alt="mark"/> 
        <span>علامة السؤال : 40</span>
        <img src={swap} alt="swap"/> 
        </Left>

    </Row>
  );
}

export default TopQuestion;
