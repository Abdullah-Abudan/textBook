import React from 'react'
import Question1 from './DivActivity/DivActivity-1/index'
import Pagination from '../Pagination';
import HeaderLeft from '../HeaderLeft';

import { Leftside } from './style';

export default function LeftSide() {

  return (
    <Leftside>
      <HeaderLeft link={"#"} title={'1'}/>
      <Question1/>
      {/* <Pagination/> */} {/*I disabled it because flipbook component */}
    </Leftside>
  )
}
