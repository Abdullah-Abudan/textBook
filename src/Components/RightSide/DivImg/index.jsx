import { useState } from "react";

// img
import border from "../../../Images/border-1.png";
import audio from "../../../Images/audio.png";
import click from "../../../Images/click.png";

// audio
import zatardescr from "../../../Audio/zatarDescr.mp3"
import { CombineImg, DivImg, Img } from "./style";




export default function MidImage() {

  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const handleMusicIconClick = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  return (
    <DivImg>
        <CombineImg>
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
