import React from 'react'
import Header from '../Header'
import Q3 from './DivActivity/DivActivity-1/QPart3'
import { styled } from 'styled-components';

const Leftside = styled.div`
width:49%;
direction: rtl;
`;

export default function LeftSide() {
  return (
    <Leftside >

      <Header/>
      < Q3/>

    </Leftside>
  )
}
