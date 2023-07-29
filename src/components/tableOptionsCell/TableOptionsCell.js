import React from 'react'
import './TableOptionsCell.css'

export default function TableOptionsCell({identifier}) {
  return (
    <div className='optionsCell'>
      <div className='edit'>
        <img className='options__image' src='../../assets/img/edit.png'/>
      </div>
      <div className='delete'>
        <img className='options__image' src='../../assets/img/3334328.png'/>
      </div>
    </div>
  )
}
