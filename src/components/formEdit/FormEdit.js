import React from 'react'
import './FormEdit.css'

export default function FormEdit({brand, model, colour, engType, engSize, identifier}) {
  return (
    <div className='form__container'>
      <form>
        <input className='form__input' type='text' name='brand' placeholder='brand' value={brand}/>
        <input className='form__input' type='text' name='model' placeholder='model' value={model}/>
        <input className='form__input' type='text' name='colour' placeholder='colour' value={colour}/>
        <input className='form__input' type='text' name='engineType' placeholder='engine type' value={engType}/>
        <input className='form__input' type='text' name='engineSize' placeholder='engine size' value={engSize}/>
        <button className='form__button'>Save</button>
        <button className='form__button'>Cancel</button>
      </form>
    </div>
  )
}
