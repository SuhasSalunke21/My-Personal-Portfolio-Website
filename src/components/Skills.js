import React from 'react'
import { VscGithubInverted, VscTerminalUbuntu} from "react-icons/vsc";
import { TbBrandHtml5,TbBrandPython, TbBrandReactNative } from "react-icons/tb";
import { SiAndroidstudio,SiCplusplus, SiDjango, SiHackerrank,SiJava,SiVisualstudiocode ,SiLeetcode,SiCodechef} from "react-icons/si";
import "./Skills.css";
// import { Link } from 'react-router-dom';

export default function Skills() {
  return (
        <div className='prof'>
        <div className='coding'>
        <h1 className='heading'>Coding Platforms</h1>
            <p>
            <a href="https://www.hackerrank.com/suhas_22010524"><SiHackerrank size={100} style={{ color:"white", margin:"3rem"}}/></a>
            <a href="https://leetcode.com/Suhas_Salunke/"><SiLeetcode size={100} style={{ color:"white", margin:"3rem"}}/></a>
            <a href="https://www.codechef.com/users/suhas2116"><SiCodechef size={100} style={{ color:"white", margin:"3rem"}}/></a>
            
            </p>
        </div>
        <div className='skill'>
            <h1 className='heading'>Technologies & Languages Known</h1>
            <p>
            <SiJava size={100} style={{ color:"white", margin:"3rem"}}/>
            <TbBrandPython size={100} style={{ color:"white",margin:"3rem"}}/>
            <TbBrandReactNative size={100} style={{ color:"white", margin:"3rem"}}/>
            <SiDjango size={100} style={{ color:"white", margin:"3rem"}}/>
            <TbBrandHtml5 size={100} style={{ color:"white", margin:"3rem"}}/>
            <SiCplusplus size={100} style={{ color:"white", margin:"3rem"}}/>

            </p>
            
        </div>
        <div className='tools'>
            <h1 className='heading'>Tools I Use</h1>
            <p>
            <SiAndroidstudio size={100} style={{ color:"white", margin:"3rem"}}/>
            <VscGithubInverted size={100} style={{ color:"white", margin:"3rem"}}/>
            <VscTerminalUbuntu size={100} style={{ color:"white", margin:"3rem"}}/>
            <SiVisualstudiocode size={100} style={{ color:"white", margin:"3rem"}}/>
            </p>
        </div>
        <div className='decor'></div>
        
    </div>
  )
}
