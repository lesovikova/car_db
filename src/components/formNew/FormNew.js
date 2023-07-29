import React from 'react'
import './FormNew.css'

export default function FormNew() {
    
  return (
    <div className='form__container'>
      <form>
        <input className='form__input' type='text' name='brand' placeholder='brand'/>
        <input className='form__input' type='text' name='model' placeholder='model'/>
        <input className='form__input' type='text' name='colour' placeholder='colour'/>
        <input className='form__input' type='text' name='engineType' placeholder='engine type'/>
        <input className='form__input' type='text' name='engineSize' placeholder='engine size'/>
        <button className='form__button'>Add</button>
        <button className='form__button'>Discard</button>
      </form>
    </div>
  )
}
