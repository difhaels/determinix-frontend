import React from 'react'
import Divider from '../elements/Divider'
import Title from '../elements/Title'
import CardShowCase from '../elements/CardShowCase'
import More from '../elements/More'

export default function Showcase() {
  return (
    <div>
      <Divider/>
      <Title what={"Showcase"}/>
      <div className='flex justify-center py-5'>
        <CardShowCase />
        <CardShowCase />
        <CardShowCase />
      </div>
      <More what={"Showcases"} where={"showcase"}/>
    </div>
  )
}
