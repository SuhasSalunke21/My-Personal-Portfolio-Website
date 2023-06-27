import React from 'react'
import "./Hero.css";
import BackgroundAnimation from '../routes/Background-Animate';
// import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className='hero'>
        <div className='heroAnimate'>
            <BackgroundAnimation />
        </div>
        <div className='content'>
            <h1>Welcome to My Personal Portfolio</h1>
            <p>Hey there, myself Suhas Salunke, a Self motivated and passion driven individual who enjoys working upon real world projects.</p>
            <div>
            <button onClick = {() => window.location = "mailto://suhas.22010524@viit.ac.in" } className='btn'>Email Me</button>
            </div>
        </div>
        <div className='decor'></div>
        
        
    </div>
  )
}
