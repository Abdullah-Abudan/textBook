import React from 'react'
import Q3 from './DivActivity/DivActivity-1/QPart3'
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
      <HeaderLeft link={""} title={'3'}/>
      < Q3/>
      <Pagination/>

    </Leftside>
  )
}
