import React from 'react'
import './TableOptionsCell.css'

export default function TableOptionsCell({identifier}) {
  return (
    <div className='optionsCell'>
      <div className='edit'>
        <img className='options__image' src={require('../../assets/img/edit.png')}/>
      </div>
      <div className='delete'>
        <img className='options__image' src={require('../../assets/img/3334328.png')}/>
      </div>
    </div>
  )
}
