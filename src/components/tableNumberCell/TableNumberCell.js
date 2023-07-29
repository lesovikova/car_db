import React from 'react'
import './TableNumberCell.css'

export default function TableNumberCell({number}) {
  return (
    <div className='numbers'>
      <p className='numbers__text'>{number}</p>
    </div>
  )
}
