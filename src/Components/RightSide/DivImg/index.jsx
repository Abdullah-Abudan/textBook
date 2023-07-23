import { styled } from "styled-components";
import { useState } from "react";

// img

import border from "../../../Images/border-1.png";
import audio from "../../../Images/audio.png";
import click from "../../../Images/click.png";

// audio
import zatardescr from "../../../Audio/zatarDescr.mp3"
export const Img = styled.img`
object-fit: contain;  
`;
const DivImg = styled.div`
position: absolute;
top: -3px;
left:50%;
transform: translateX(-25%);
display: flex;
align-items: center;
gap: 5px;
`;
const CombineImg = styled.div`
transform: translate(20px,30px);
display: flex;
align-items: center;
gap: 5px;
`;


export default function MidImage() {

  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const handleMusicIconClick = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  return (
    <DivImg>
        <CombineImg >
        <Img src={click} width="45px" />
        
        <div>
        <Img src={audio} width="45px"  style={{cursor:"pointer"}}  onClick={handleMusicIconClick}/>
        {isMusicPlaying && (
        <audio src={zatardescr} autoPlay />
      )}          
        </div>      
       
        </CombineImg>
        <Img src={border} width="120px"/>
    </DivImg>
  )
}
