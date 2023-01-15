import "./Hero_project.css";
import React from 'react'
import projectImg from '../assests/project.png'

export default function Hero_project() {
  return (
    <div className="heroPro">
    <div className="bck">
      <img className="pro-Image" src={projectImg} alt=""/>
    </div>
      
      <div className="content">
      <h1>Projects</h1>
      <p>Here Are My Recent Works</p>
      </div>
      
      
    </div>
  )
}
