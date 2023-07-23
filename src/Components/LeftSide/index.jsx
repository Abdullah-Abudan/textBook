import React from 'react'
import Header from '../Header'
import Activity1 from './DivActivity/DivActivity-1/index'
import { styled } from 'styled-components';

const Leftside = styled.div`
width:49%;
direction: rtl;
`;

export default function LeftSide() {
  return (
    <Leftside >

      <Header/>
      <Activity1/>

    </Leftside>
  )
}
