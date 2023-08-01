import React from 'react'
import TopQuestion from './TopQuestions';



export default function HeaderLeft({link,title}) {
  return (
    <div>
        <TopQuestion link ={link} title={title}/>
    </div>
  )
}
