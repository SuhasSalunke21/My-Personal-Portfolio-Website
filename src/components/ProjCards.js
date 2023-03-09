import "./ProjCards.css"
import React from 'react'
import paintImg from "../assests/paintImg.png"
import {AiFillGithub} from "react-icons/ai";
import {FaExternalLinkAlt} from "react-icons/fa";
import proj2 from "../assests/proj2.png"
export default function ProjCards() {
  return (
    <>
    <div className="projects">
      <div class="card" style={{ width: '29rem' }}>
          <img src={paintImg} className="cardImg" alt="..." />
          <div className="card-body">
              <h3 className="card-title">Ms Paint Clone</h3>
              <p>Made a Paint Software with Adjustable Canvas size, Brush Size and Pick any Color Option.</p>
              <a href="https://codepen.io/mvpatil45/pen/VwMVKEP" class="btn mr-2"><FaExternalLinkAlt size={20} style={{ color:"red"}}/> Visit Site</a>
              <a href="https://github.com/mvpatil45/TODO-List" class="btn "><AiFillGithub size={20} style={{ color:"red"}}/> Github</a>
          </div>
          
      </div>
      <div class="card" style={{ width: '29rem' }}>
          <img src={proj2} className="cardImg" alt="..." />
          <div className="card-body">
              <h3 className="card-title">Employee Management System</h3>
              <p>Built a OOP project in Cpp which keeps track of all Employee Details(CRUD Operations).</p>
              
              <a href="https://onlinegdb.com/_1aWlan9Q" class="btn mr-2"><FaExternalLinkAlt size={20} style={{ color:"red"}}/> Visit Site</a>
              <a href="https://github.com/mvpatil45" class="btn "><AiFillGithub size={20} style={{ color:"red"}}/> Github</a>
          </div>
      </div>
      
    </div>
    <div className="decor"></div>
    </>
  )
}

