import React, { useState } from 'react'
import "../css/output.css"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import About from '../components/About'
import Showcase from '../components/Showcase'
import Articles from '../components/Articles'
import Activities from '../components/Activities'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false: true);
    return () => (window.onscroll = null)
  }
  return (
    <div className="">
      <div className="navbar">
        <Navbar isScrolled={isScrolled}/>
      </div>
      <div className='flex flex-wrap gap-5'>
        <div className="about w-full pt-36 bg-gradient-to-b from-red-100">
          <About />
        </div>
        <div className="showcase w-full pt-16">
          <Showcase />
        </div>
        <div className="activities w-full pt-16">
          <Activities />
        </div>
        <div className="articles w-full pt-16">
          <Articles />
        </div>
      </div>
      <div className='footer pt-16'>
        <Footer />
      </div>
    </div>
  )
}
