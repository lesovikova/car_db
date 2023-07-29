import React from 'react'
import './TableBody.css';
import TableRow from '../tableRow/TableRow';
import NewRow from '../newRow/NewRow';


export default function TableBody() {
    

    const arr = [
        {number:1, brand: 'brand1', model: 'model1', colour: 'colour1', engineType: 'engineType1', engineSize: 'engineSize1'},
        {number:2, brand: 'brand2', model: 'model2', colour: 'colour2', engineType: 'engineType2', engineSize: 'engineSize2'},
        {number:3, brand: 'brand3', model: 'model3', colour: 'colour3', engineType: 'engineType3', engineSize: 'engineSize3'},
        {number:4, brand: 'brand4', model: 'model4', colour: 'colour4', engineType: 'engineType4', engineSize: 'engineSize4'},
        {number:5, brand: 'brand5', model: 'model5', colour: 'colour5', engineType: 'engineType5', engineSize: 'engineSize5'},
        {number:6, brand: 'brand6', model: 'model6', colour: 'colour6', engineType: 'engineType6', engineSize: 'engineSize6'},
        {number:7, brand: 'brand7', model: 'model7', colour: 'colour7', engineType: 'engineType7', engineSize: 'engineSize7'},
        {number:8, brand: 'brand8', model: 'model8', colour: 'colour8', engineType: 'engineType8', engineSize: 'engineSize8'},
    ]
    console.log(arr);

  return (
    
    <div className='table-body'>
      {
            arr.map((item) => {
                return <TableRow number={item.number} 
                brand= {item.number} 
                model={item.model} 
                colour={item.brand} 
                engineType={item.engineType} 
                engineSize ={item.engineSize}
                key={item.number}/>
            })
        }
        <NewRow />
    </div>
  )
}
