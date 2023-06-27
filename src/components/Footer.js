import "./Footer.css"
import React from 'react'
import { FaHome,FaInstagram, FaMailBulk, FaPhone } from "react-icons/fa";
import { TiSocialLinkedin} from "react-icons/ti";
import { VscGithubInverted} from "react-icons/vsc";


export default function Footer() {
  return (
    <div className="footer"><h2>Contact</h2>
    <div><p className="social">
    <a href="https://www.linkedin.com/in/suhas-salunke-45557a218"><TiSocialLinkedin size={50} style={{ color:"white", marginRight:"3rem"}}/></a>
    <a href="https://github.com/SuhasSalunke21"><VscGithubInverted size={50} style={{ color:"white", marginRight:"3rem"}}/></a>
    <a href="https://www.instagram.com/suhas_salunke_02/"><FaInstagram size={50} style={{ color:"white", marginRight:"1rem"}}/></a>
    </p></div>
        <div className="phone">
            <p>
            <FaPhone size={20} style={{ color:"white", marginRight:"1rem"}}/>
            +91 7499927844</p>
        </div>
        <div className="mail">
            <p>
            <FaMailBulk size={20} style={{ color:"white", marginRight:"1rem"}}/>
            suhassalunke2116@gmail.com</p>
        </div>
        <div className="home">
            <p>
            <FaHome size={20} style={{ color:"white", marginRight:"1rem"}}/>
            Pune,Maharashtra</p>
        </div>
        
    </div>
  )
}
