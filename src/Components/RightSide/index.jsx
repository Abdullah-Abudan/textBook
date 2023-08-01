import React, { useEffect } from 'react'
import Header from '../Header'
import MidImage from '../RightSide/DivImg'
import  { Img } from '../RightSide/DivImg/style'
import {Desc, Title} from '../Fonts'

// img
import man from "../../Images/man.png"
import { StructureInputs } from '../Inputs';
import { Flex, Rightside } from './style'

import Aos from "aos";
import "aos/dist/aos.css";



export default function RightSide() {

  useEffect(()=>{
    Aos.init({
      duration: 2000,          
      easing: 'ease-in-sine',  
      delay: 100,                
      startEvent: 'DOMContentLoaded', 
    });
  },[]);

  return (
    <Rightside>
        <Header />
        <MidImage />
        <div data-aos="fade-down">
        <Title style={{minHeight: '30vh'}}>
          {" "}
          أتعرف عَلَى زَعْتَر الْحَكِيم وَعَلَى سُلُوكه<br></br> فِي الطَّرِيق{" "}
        </Title>
        </div>
        <Flex>
          <Desc data-aos="fade-down">
          مَرْحَبَا أَصْدِقَائِيُّ انا زَعْتَر الْحَكِيم صَدِيق الأطْفالِ انا
            حَذِر وَمُتَسَامِح اِسْمي يَجْمَع اُحْرُف الْاِحْتِرَاس
            وَالسَّلَاَمَة عَلَى الطَّرِيق تَذْكُرُوا ان
            <Title style={{transform:"none"}}>اِسْمِيَّ زَعْتَر وَهُوَ مُكَوِّن مِنَ اربعة اُحْرُف:</Title>
          </Desc>
          <Img src={man} data-aos="fade-up" />

        </Flex>
        <StructureInputs txt1={'زَ'} txt2={'عـْ'} txt3={'تـَ'} txt4={'رٌ'}/>
    </Rightside>
  )
}
