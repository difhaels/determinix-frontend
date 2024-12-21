import React from 'react'
import dx from "../assets/dx-logo.png";

export default function PageTilte({what}) {
  return (
    <div className='flex justify-center items-center pt-24 lg:pt-36 '>
      <img src={dx} alt="dx" className="lg:w-10 w-8 mx-2"/>
      <h1 className='text-lg lg:text-xl font-semibold'>{what}</h1>
    </div>
  )
}
