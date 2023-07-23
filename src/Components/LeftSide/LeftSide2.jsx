import React from 'react'
import Q2 from './DivActivity/DivActivity-1/QPart2'
import { styled } from 'styled-components';
import Pagination from '../Pagination';
import HeaderLeft from '../HeaderLeft';

const Leftside = styled.div`
width:49%;
direction: rtl;
`;

export default function LeftSide() {
  return (
    <Leftside >

<HeaderLeft link={""} title={'2'}/>

      <Q2/>
      <Pagination/>
    </Leftside>
  )
}
