import React, { useState } from 'react'
import "../css/output.css"

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageTitle from '../elements/PageTilte'
import CardShowCase from '../elements/CardShowCase'

export default function Showcase() {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false: true);
    return () => (window.onscroll = null)
  }
  return (
    <div>
      <div className="navbar">
        <Navbar isScrolled={isScrolled}/>
      </div>
      <div>
        <PageTitle what={"Showcase"}/>
        <div className="flex justify-center pt-10">
          <CardShowCase/>
        </div>
      </div>
      <div className='footer pt-16'>
        <Footer />
      </div>
    </div>
  )
}
