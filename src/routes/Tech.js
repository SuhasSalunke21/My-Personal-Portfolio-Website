import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroProject from '../components/HeroProject'
import Skills from '../components/Skills'
import skill from "../assests/tech.png"

export default function Tech() {
  return (
    <div>
      <Header/>
      <HeroProject imgPath={skill} name="Professional SkillSet" />
      <Skills />
      <Footer/>
    </div>
  )
}
