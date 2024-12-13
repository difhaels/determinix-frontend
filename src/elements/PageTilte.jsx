import React from 'react'
import dx from "../assets/dx-logo.png";

export default function PageTilte({what}) {
  return (
    <div className='flex justify-center items-center pt-36'>
      <img src={dx} alt="dx" className="w-10 mx-2"/>
      <h1 className='text-xl font-semibold'>{what}</h1>
    </div>
  )
}
