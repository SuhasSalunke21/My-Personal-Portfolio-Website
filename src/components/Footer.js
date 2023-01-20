import "./Footer.css"
import React from 'react'
import { FaHome,FaInstagram, FaMailBulk, FaPhone } from "react-icons/fa";
import { TiSocialLinkedin} from "react-icons/ti";
import { VscGithubInverted} from "react-icons/vsc";


export default function Footer() {
  return (
    <div className="footer"><h2>Contact</h2>
    <div><p className="social">
    <a href="https://www.linkedin.com/in/manas-patil-85b71320b/"><TiSocialLinkedin size={50} style={{ color:"white", marginRight:"3rem"}}/></a>
    <a href="https://github.com/mvpatil45"><VscGithubInverted size={50} style={{ color:"white", marginRight:"3rem"}}/></a>
    <a href="https://www.instagram.com/manas._.45/"><FaInstagram size={50} style={{ color:"white", marginRight:"1rem"}}/></a>
    </p></div>
        <div className="phone">
            <p>
            <FaPhone size={20} style={{ color:"white", marginRight:"1rem"}}/>
            +91 9405501474</p>
        </div>
        <div className="mail">
            <p>
            <FaMailBulk size={20} style={{ color:"white", marginRight:"1rem"}}/>
            mvpatil4321@gmail.com</p>
        </div>
        <div className="home">
            <p>
            <FaHome size={20} style={{ color:"white", marginRight:"1rem"}}/>
            Pune,Maharashtra</p>
        </div>
        
    </div>
  )
}
