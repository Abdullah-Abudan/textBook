import React from 'react'
import Header from '../Header'
import Q2 from './DivActivity/DivActivity-1/QPart2'
import { styled } from 'styled-components';

const Leftside = styled.div`
width:49%;
direction: rtl;
`;

export default function LeftSide() {
  return (
    <Leftside >

      <Header/>
      <Q2/>

    </Leftside>
  )
}
