import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroProject from '../components/HeroProject'
import ProjCards from '../components/ProjCards'

export default function projects() {
  return (
    <div>
      <Header/>
      <HeroProject />
      <ProjCards />
      <Footer/>
    </div>
  )
}
