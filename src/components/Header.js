import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css";
import logo from "../assests/favicon.png"
export default function header() {
  return (
    <div className="header">
        <Link to="/"><img src={logo} alt="LOGO" style={{width: "10%" ,marginRight:"1rem"}}></img>Portfolio</Link>
        <ul className='NavMenu'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/tech">Skill Sets</Link></li>
        </ul>
        
    </div>
  )
}
