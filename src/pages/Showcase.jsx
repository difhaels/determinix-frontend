import React, { useEffect, useState } from 'react'
import "../css/output.css"

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageTitle from '../elements/PageTilte'
import CardShowCase from '../elements/CardShowCase'

export default function Showcase() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false: true);
    return () => (window.onscroll = null)
  }
  return (
    <div>
      <div className="navbar">
        <Navbar isScrolled={isScrolled}/>
      </div>
      <div className='bg-gradient-to-b from-sky-300 to-white'>
        <PageTitle what={"Showcase"}/>
        <div className="flex justify-center pt-10 flex-wrap gap-3">
          <CardShowCase full={true}/>
          <CardShowCase full={true}/>
          <CardShowCase full={true}/>
          <CardShowCase full={true}/>
          <CardShowCase full={true}/>
        </div>
      </div>
      <div className='footer pt-16'>
        <Footer fix={0}/>
      </div>
    </div>
  )
}
