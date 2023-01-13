import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import About from "../components/About"

export default function home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Footer />
    </div>
  )
}
