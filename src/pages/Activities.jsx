import React, { useEffect, useState } from 'react'
import "../css/output.css"

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageTitle from '../elements/PageTilte'
import CardActivities from '../elements/CardActivities'

import { activities } from '../test/constant'

export default function Activities() {
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
      <div className='bg-gradient-to-b from-teal-300 to-white'>
        <PageTitle what={"Activities"}/>
        <div className="flex justify-center pt-10 flex-wrap gap-3">
          {activities.map((activity) => {
            return <CardActivities key={activity.id} id={activity.id} date={activity.date} img={activity.img}  full={true} />
          })}
        </div>
      </div>
      <div className='footer pt-16'>
        <Footer fix={0}/>
      </div>
    </div>
  )
}
