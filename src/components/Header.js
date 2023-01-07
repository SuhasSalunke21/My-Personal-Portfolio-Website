import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css";
export default function header() {
  return (
    <div className="header">
        <Link to="/">Portfolio</Link>
        <ul className='NavMenu'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/tech">Technologies</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        
    </div>
  )
}