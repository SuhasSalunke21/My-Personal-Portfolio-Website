import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import pdf from '../assests/Manas Patil(Resume).pdf'
export default function Resume() {
  return (
    <div>
        <Header />
        <div style={{ width: '95rem', height:'70rem',alignContent:'center',padding:'1.5rem' }}>
        <object data={pdf} type="application/pdf" width="100%" height="100%">
            <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
        </object>
        </div>
        
        <Footer />
    </div>
    
  )
}
