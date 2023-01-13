import "./Footer.css"
import React from 'react'
import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer"><h2>Contact</h2>
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
