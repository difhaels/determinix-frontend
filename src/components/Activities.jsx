import React from 'react'
import Divider from '../elements/Divider'
import Title from '../elements/Title'
import CardActivities from '../elements/CardActivities'
import More from '../elements/More'

export default function Activities() {
  return (
    <div>
      <Divider/>
      <Title what={"Activities"}/>
      <div className='flex justify-center py-5'>
        <CardActivities />
        <CardActivities />
        <CardActivities />
      </div>
      <More what={"Activities"} where={"Activities"}/>
    </div>
  )
}
