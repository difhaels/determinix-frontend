import React, { useState } from 'react'
import "../css/output.css"

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageTitle from '../elements/PageTilte'
import CardArticles from '../elements/CardArticles'

export default function Articles() {
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
        <PageTitle what={"Articles"}/>
        <div className="flex justify-center pt-10">
          <CardArticles/>
        </div>
      </div>
      <div className='footer pt-16'>
        <Footer fix={true}/>
      </div>
    </div>
  )
}
