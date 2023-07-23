import { styled } from "styled-components";
import { useState } from "react";


// img
import audio from "../../../../../Images/audio.png";
import children from "../../../../../Images/children.png";

// audio
import listenZ from "../../../../../Audio/listenZ.mp3";

export const Img = styled.img`
object-fit: contain;  
`;

const DivQusetion = styled.div`
background-color: #fff0e5;
font-size: 24px;
margin-top: 6px;
padding: 6px;
font-weight: bold;
padding-right: 19px;
`;

const Span = styled.span`
color: #cd552d;
`;

const Div = styled.div`
clip-path: polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%);
background-color: #ffb011;
width: 300px;
height: 100px;
position:relative;
padding: 0 20px;
`;


export default function Q3() {

   // audio
   const [isMusicPlaying, setIsMusicPlaying] = useState(false);
   const handleMusicIconClick = () => {
     setIsMusicPlaying(!isMusicPlaying);
   };
  return (
    <>
    <div style={{display:"flex",backgroundColor:"#fff0e5",justifyContent:"space-between",alignItems:"center",marginTop:"16px"}}>

    <div>
    <Img src={audio} width="55px"  style={{cursor:"pointer"}}  onClick={handleMusicIconClick}/>
        {isMusicPlaying && (
        <audio src={listenZ} autoPlay />
      )}
    </div>
    <DivQusetion>
    <p>أسْمَعُ قِراءَةَ الْجُمْلَةِ التّالِيَةِ، ثُمَّ أَضَعُ خَطًّا تَحْتَ الْكَلِمَةِ الَّتي فيها حَرْفُ <bdi><Span>(زَ) الزّاي </Span></bdi></p>
    </DivQusetion>

  </div>
  
  
  <div style={{display:"flex",flexDirection:"column",gap:"40px",alignItems:"center",marginTop:"20px"}}>
    <div>
      <Img src={children} />
      </div>
      <Div>
        <span style={{position:"absolute",top:"50%",transform:'translateY(-50%)',zIndex:"222",color:"black",fontWeight:"bold",fontSize:"20px"}}> يَقِفُ زُملاءُ زعْتَرٍ على الرَّصيفِ.</span>
      </Div>
      </div>
    </>
  )
}
