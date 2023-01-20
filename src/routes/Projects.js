import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroProject from '../components/HeroProject'
import ProjCards from '../components/ProjCards'
import projectImg from '../assests/project.png'

export default function projects() {
  return (
    <div>
      <Header/>
      <HeroProject imgPath={projectImg} name="Projects" para="Here Are My Recent Works"/>
      <ProjCards />
      <Footer/>
    </div>
  )
}
