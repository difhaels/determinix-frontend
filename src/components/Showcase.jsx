import React from 'react'
import Divider from '../elements/Divider'
import Title from '../elements/Title'
import More from '../elements/More'

export default function Showcase() {
  return (
    <div>
      <Divider/>
      <Title what={"Showcase"}/>
      <More what={"Showcases"} where={"showcase"}/>
    </div>
  )
}
