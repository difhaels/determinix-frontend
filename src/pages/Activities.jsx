import React, { useState } from 'react'
import "../css/output.css"

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageTitle from '../elements/PageTilte'
import CardActivities from '../elements/CardActivities'

export default function Activities() {
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
        <PageTitle what={"Activities"}/>
        <div className="flex justify-center pt-10">
          <CardActivities/>
        </div>
      </div>
      <div className='footer pt-16'>
        <Footer />
      </div>
    </div>
  )
}
