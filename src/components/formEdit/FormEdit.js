import React from 'react'
import './FormEdit.css'

export default function FormEdit({brand, model, colour, engineType, engineSize, identifier, changeValue, saveChanges, cancelChanges}) {
  return (
    <div className='form__container'>
      <form>
        <input className='form__input' type='text' name='brand' placeholder='brand' defaultValue={brand} onChange={(e) => changeValue(identifier, e)}/>
        <input className='form__input' type='text' name='model' placeholder='model' defaultValue={model} onChange={(e) => changeValue(identifier, e)}/>
        <input className='form__input' type='text' name='colour' placeholder='colour' defaultValue={colour} onChange={(e) => changeValue(identifier, e)}/>
        <input className='form__input' type='text' name='engineType' placeholder='engine type' defaultValue={engineType} onChange={(e) => changeValue(identifier, e)}/>
        <input className='form__input' type='text' name='engineSize' placeholder='engine size' defaultValue={engineSize} onChange={(e) => changeValue(identifier, e)}/>
       
       
        {/* <input className='form__input' type='text' name='brand' placeholder='brand' value={brand}/>
        <input className='form__input' type='text' name='model' placeholder='model' value={model} />
        <input className='form__input' type='text' name='colour' placeholder='colour' value={colour} />
        <input className='form__input' type='text' name='engineType' placeholder='engine type' value={engineType} />
        <input className='form__input' type='text' name='engineSize' placeholder='engine size' value={engineSize} />
        */}
       
        <button className='form__button' onClick={(e) => saveChanges(identifier, e)}>Save</button>
        <button className='form__button' onClick={cancelChanges}>Cancel</button>
      </form>
    </div>
  )
}
