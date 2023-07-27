import { styled } from "styled-components";
import React, { useState } from 'react';
import { StructureInputs } from "../../../../Inputs/index";
import { Title } from "../../../../Fonts";

// img
import activity1 from "../../../../../Images/activity-1.png";
import traffic from "../../../../../Images/traffic.png";
import carMan from "../../../../../Images/carMan.png"

// audio
import Acharacter from "../../../../../Audio/Acharacter.mp3";

export const Img = styled.img`
object-fit: contain;  
`;

const DivFlex = styled.div`
display: flex;
gap: 20px;
`;

const DivInputName = styled.div`
display: flex;
align-items: center;
gap: 20px;
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


const DivBorder = styled.div`
width: 20px;
height: 120px;
background-color: hsl(27.5deg 87.8% 83.92%);
display: flex;
flex-direction: column;
gap: 20px;
border-radius: 16px;
position: relative;
`;

const BorderText = styled.span`
font-size: 40px;
position: absolute; 
text-shadow: 1px 1px #fff, -1px 1px #fff, 1px -1px #fff, -1px -1px #fff, 1px 1px 5px #555;
`;
const DivFlexActivity = styled(DivFlex)`
  justify-content: space-evenly;
  
`;
export default function Question2() {
  // input
  const [txt2, setTxt2] = useState('');
  const [txt3, setTxt3] = useState('');

  const handleTxt2Change = (event) => {
    setTxt2(event.target.value);
  };

  const handleTxt3Change = (event) => {
    setTxt3(event.target.value);
  };

  // audio
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const handleMusicIconClick = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };
  
  return (
    <>
    <DivFlex>
      <div >
        <Img src={activity1}  />
      </div>
      <DivInputName>
        <p style={{color:'hsl(27.65deg 93.13% 54.31%)',fontSize:"40px"}}>ٱسْمي </p>
        <StructureInputs txt1={'زَ'} txt2={'عـْ'} txt3={'تـَ'} txt4={'رٌ'} noAbsolute/>
      </DivInputName>
    </DivFlex>


    <DivQusetion>
    <p>أُلَوّنُ حَرفَ <bdi><Span>(عَ) الْعَيْن </Span></bdi>ثَانِيْ حَرْفٍ مِنِ اسْمي، وَأُكْمِلُ الْأَحْرُفَ  النّاقصة في الْمُرَبًّعاتِ الْمُلائِمَةِ، حَسَبَ الْكَلِمَةِ وَالصّورَةِ.</p>
    </DivQusetion>
    <div style={{ transform:'translate(15px,-40px)'}}>
    <Img src={traffic} width="35px"  style={{cursor:"pointer"}}  onClick={handleMusicIconClick}/>
        {isMusicPlaying && (
        <audio src={Acharacter} autoPlay />
      )}
    </div>


    <DivFlexActivity>
      <DivBorder>
      <Title style={{transform:'translate(45px,-1px)',fontSize:"40px"}}>سُرْ</Title> 
      <BorderText>
        عـَ
      <Title style={{transform:'translate(-24px,-43px)',fontSize:"40px",position:"relative",zIndex:"-2px"}}>ةٌ</Title> 
      </BorderText>
      <BorderText style={{top:"60px"}}>عــَ</BorderText>
      </DivBorder>

      <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
        <div>
          <Img src={carMan}/>
        </div>
        <StructureInputs txt1={'َسُ'} txt2={txt2} txt3={txt3} txt4={'ةٌ'} noAbsolute color onChangeTxt2={handleTxt2Change} onChangeTxt3={handleTxt3Change}/>
      </div>

    </DivFlexActivity>
    </>
  )
}
