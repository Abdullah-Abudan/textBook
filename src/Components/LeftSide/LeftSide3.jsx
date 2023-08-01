import React from 'react'
import Question3 from './DivActivity/DivActivity-1/Question3'
import Pagination from '../Pagination';
import HeaderLeft from '../HeaderLeft';
import { Leftside } from './style';


export default function LeftSide() {
  return (
    <Leftside >
      <HeaderLeft link={""} title={'3'}/>
      < Question3/>
      {/* <Pagination/> */} {/*I disabled it because flipbook component */}

    </Leftside>
  )
}
