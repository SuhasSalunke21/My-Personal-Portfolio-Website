import "./Hero_project.css";
import React from 'react'


export default function Hero_project(props) {
  return (
    <div className="heroPro">
    <div className="bck">
      <img className="pro-Image" src={props.imgPath} alt=""/>
    </div>
      
      <div className="content">
      <h1>{props.name}</h1>
      <p>{props.para}</p>
      </div>
      
      
    </div>
  )
}
