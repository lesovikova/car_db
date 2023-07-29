import React from 'react'
import './FormNew.css'

export default function FormNew({discard, number, addItem}) {

  // function discardForm(e){
  //   e.preventDefault();
  // }

  return (
    <div className='form__container' name={number}>
      <form className='form' onReset={discard}>
        <input className='form__input' type='text' name='brand' placeholder='brand'/>
        <input className='form__input' type='text' name='model' placeholder='model'/>
        <input className='form__input' type='text' name='colour' placeholder='colour'/>
        <input className='form__input' type='text' name='engineType' placeholder='engine type'/>
        <input className='form__input' type='text' name='engineSize' placeholder='engine size'/>
        <button type='submit' className='form__button' onClick={addItem}>Add</button>
        <button type='reset' className='form__button' onClick={discard}>Discard</button>
      </form>
    </div>
  )
}
