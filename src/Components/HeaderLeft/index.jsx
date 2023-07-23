import React from 'react'
import TopQ from './TopQuestions';



export default function HeaderLeft({link,title}) {
  return (
    <div>
        <TopQ link ={link} title={title}/>
    </div>
  )
}
