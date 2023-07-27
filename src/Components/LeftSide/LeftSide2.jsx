import React from 'react'
import Question2 from './DivActivity/DivActivity-1/QPart2'
import Pagination from '../Pagination';
import HeaderLeft from '../HeaderLeft';

import { Leftside } from './style';

export default function LeftSide() {
  return (
    <Leftside>

<HeaderLeft link={""} title={'2'}/>

      <Question2/>
      {/* <Pagination/> */} {/*I disabled it because flipbook component */}
    </Leftside>
  )
}
