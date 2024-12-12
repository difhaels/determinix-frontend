import React from 'react'
import Divider from '../elements/Divider'
import Title from '../elements/Title'
import CardArticles from '../elements/CardArticles'
import More from '../elements/More'

export default function Articles() {
  return (
    <div>
      <Divider/>
      <Title what={"Articles"}/>
      <div className='flex justify-center py-5'>
        <CardArticles />
        <CardArticles />
        <CardArticles />
      </div>
      <More what={"Articles"} where={"articles"}/>
    </div>
  )
}
