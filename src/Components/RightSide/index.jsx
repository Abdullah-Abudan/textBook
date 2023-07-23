import React from 'react'
import Header from '../Header'
import MidImage, { Img } from '../RightSide/DivImg'
import {Desc, Title} from '../Fonts'
import { styled } from 'styled-components';

// img
import man from "../../Images/man.png"
import { StructureInputs } from '../Inputs';

const Flex = styled.div`
display: flex;
align-items: center;
padding: 0 20px;
gap: 20px;
min-height: 40vh;
`;
const Rightside = styled.div`
width:49%;
position:relative;
direction: rtl;
overflow-y: auto;
`;

export default function RightSide() {
  return (
    <Rightside>
        <Header />
        <MidImage />
        <Title style={{minHeight: '30vh'}}>
          {" "}
          أتعرف عَلَى زَعْتَر الْحَكِيم وَعَلَى سُلُوكه<br></br> فِي الطَّرِيق{" "}
        </Title>
        
        <Flex>
          <Desc>
          مَرْحَبَا أَصْدِقَائِيُّ انا زَعْتَر الْحَكِيم صَدِيق الأطْفالِ انا
            حَذِر وَمُتَسَامِح اِسْمي يَجْمَع اُحْرُف الْاِحْتِرَاس
            وَالسَّلَاَمَة عَلَى الطَّرِيق تَذْكُرُوا ان
            <Title style={{transform:"none"}}>اِسْمِيَّ زَعْتَر وَهُوَ مُكَوِّن مِنَ اربعة اُحْرُف:</Title>
          </Desc>
          <Img src={man} />

        </Flex>
        <StructureInputs txt1={'زَ'} txt2={'عـْ'} txt3={'تـَ'} txt4={'رٌ'}/>
    </Rightside>
  )
}
