import React from 'react'
import './TableHeadCell.css'

export default function TableHeadCell({text}) {
  return (
    <div>
      <div className='table-head__cell'>
        <p className='table-head__cell-text'>{text}</p>
      </div>
    </div>
  )
}
