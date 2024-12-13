import React from 'react'

export default function Footer({fix}) {
  return (
    <div className={`bg-black flex justify-center text-white py-4 ${fix? "fixed w-full bottom-0":""}`}>Copyright © 2024 Determinix | Design by Power</div>
  )
}
