import React from 'react'
import Activity1 from './DivActivity/DivActivity-1/index'
import { styled } from 'styled-components';
import Pagination from '../Pagination';
import HeaderLeft from '../HeaderLeft';
const Leftside = styled.div`
width:49%;
direction: rtl;
`;

export default function LeftSide() {

  return (
    <Leftside>
      <HeaderLeft link={"#"} title={'1'}/>
      <Activity1/>
      <Pagination/>
    </Leftside>
  )
}
