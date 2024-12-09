import React from 'react'
import "../css/output.css"
import Navbar from '../components/Navbar'

export default function home() {
  return (
    <div className="">
      <div className="navbar">
        <Navbar />
      </div>
      <div>
        <div className="about"></div>
        <div className="showcase"></div>
        <div className="articles"></div>
        <div className="activities"></div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}
