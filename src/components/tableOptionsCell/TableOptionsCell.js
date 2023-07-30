import React from 'react'
import './TableOptionsCell.css'

export default function TableOptionsCell({identifier, handleDelete}) {
  return (
    <div className='optionsCell table-cell'>
      <div className='edit'>
        <img className='options__image' src={require('../../assets/img/edit.png')}/>
      </div>
      <div className='delete' onClick={() => handleDelete(identifier)}>
        <img className='options__image' src={require('../../assets/img/3334328.png')}/>
      </div>
    </div>
  )
}
