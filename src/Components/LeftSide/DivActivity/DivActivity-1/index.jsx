import { StructureInputs } from "../../../Inputs";
import { Title } from "../../../Fonts";
import { StructureInputsActivity } from "./InputStructureActivity";
import { useState } from "react";

// img
import activity1 from "../../../../Images/activity-1.png";
import traffic from "../../../../Images/traffic.png";
import children from "../../../../Images/children.png";

// audio
import Zcharacter from "../../../../Audio/Zcharacter.mp3";

import { BorderText, DivBorder, DivFlex, DivFlexActivity, DivInputName, DivQusetion, Img, Span } from "./style";

export default function Question1() {

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
    <p>أُلَوّنُ حَرفَ <bdi><Span>(زَ) الزّاي </Span></bdi>أَوَّلَ حَرْفٍ مِنِ اسْمي، وَأُكْمِلُ الْأَحْرُفَ  النّاقصة في الْمُرَبًّعاتِ الْمُلائِمَةِ، حَسَبَ الْكَلِمَةِ وَالصّورَةِ.</p>
    </DivQusetion>
    
    <div style={{ transform:'translate(-1px,-40px)'}}> {/*15px to -1px */}
      <Img src={traffic} width="30px"  style={{cursor:"pointer"}}  onClick={handleMusicIconClick}/> {/*35px to 30px because flipBook */}
        {isMusicPlaying && (
        <audio src={Zcharacter} autoPlay />
      )}
    </div>


    <DivFlexActivity>
      <DivBorder>
      <BorderText>
        زُ
      <Title style={{transform:'translate(-20px,-38px)',fontSize:"40px"}}>مَلاءٌ</Title> 
      </BorderText>
      <BorderText style={{top:"60px"}}>زُ</BorderText>
      </DivBorder>

      <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
        <div>
          <Img src={children} height={'147px'} />
        </div>
        <StructureInputsActivity/>
      </div>

    </DivFlexActivity>
    </>
  )
}
