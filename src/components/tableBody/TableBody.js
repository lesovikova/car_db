import React, {useState} from 'react'
import './TableBody.css';
import TableRow from '../tableRow/TableRow';
import NewRow from '../newRow/NewRow';
import FormNew from '../formNew/FormNew'
import FormEdit from '../formEdit/FormEdit';



export default function TableBody() {
    
const [arr, setArr] = useState([
        {number:1, brand: 'brand1', model: 'model1', colour: 'colour1', engineType: 'engineType1', engineSize: 'engineSize1'},
        {number:2, brand: 'brand2', model: 'model2', colour: 'colour2', engineType: 'engineType2', engineSize: 'engineSize2'},
        {number:3, brand: 'brand3', model: 'model3', colour: 'colour3', engineType: 'engineType3', engineSize: 'engineSize3'},
        {number:4, brand: 'brand4', model: 'model4', colour: 'colour4', engineType: 'engineType4', engineSize: 'engineSize4'},
        {number:5, brand: 'brand5', model: 'model5', colour: 'colour5', engineType: 'engineType5', engineSize: 'engineSize5'},
        {number:6, brand: 'brand6', model: 'model6', colour: 'colour6', engineType: 'engineType6', engineSize: 'engineSize6'},
        {number:7, brand: 'brand7', model: 'model7', colour: 'colour7', engineType: 'engineType7', engineSize: 'engineSize7'},
        {number:8, brand: 'brand8', model: 'model8', colour: 'colour8', engineType: 'engineType8', engineSize: 'engineSize8'},
                ])
    

    const [buttonClick, setButtonClick] = useState(false);
    function addRowOnCLick(){
        setButtonClick(true);
        
    }

    function discardRow(e){
        e.preventDefault();
        setButtonClick(false);
    }

    const [newCar, setNewCar] = useState({ 
        brand: "", 
        model: "", 
        colour: "", 
        engineType: "", 
        engineSize: ""})

    function updateNewCar(e){
        const valueName = e.target.name;
        setNewCar(newCarHave => ({
            ...newCarHave,
             number: arr[arr.length-1].number+1, 
            [valueName]: e.target.value
        }))
    }

    function addNewCar(e){
        e.preventDefault();
        setArr(arrThere => [...arrThere, newCar])        
        discardRow(e);
    }

    function handleDelete(index) {
            setArr(arrThere => [
              ...arrThere.slice(0, index-1),
              ...arrThere.slice(index + 1, arr.length)
            ]);
          }

    const [change, setChange] = useState(0)
    function changeExisting(number){
        setChange(number)
    }

    const [edit, setEdit] = useState({ 
        brand: "", 
        model: "", 
        colour: "", 
        engineType: "", 
        engineSize: ""})
    function getChangedCar(identifier, e) {
        const valueName = e.target.name;
        setEdit(editedCar => ({
            ...editedCar,
            number: identifier,
            [valueName]: e.target.value
        }))
        console.log(e.target.value);
        console.log(edit);
    }
    function handleSaveChanges(identifier, e){
        e.preventDefault();
        const index = arr.findIndex(el => el.number == identifier)
        console.log(index);
        arr[index] = edit;
        console.log(arr);
        changeExisting(0);
    }

    function handleCancelEdit(){
        changeExisting(0)
    }

  return (
    
    <div className='table-body'>
      {
            arr.map((item) => {
                return change == item.number ? <FormEdit
                cancelChanges={handleCancelEdit}  
                changeValue={getChangedCar} 
                saveChanges={handleSaveChanges}
                brand= {item.brand} 
                model={item.model} 
                colour={item.colour} 
                engineType={item.engineType} 
                engineSize ={item.engineSize} 
                identifier={item.number}/> : <TableRow handleDelete={handleDelete} handleEdit={changeExisting}
                number={item.number} 
                brand= {item.brand} 
                model={item.model} 
                colour={item.colour} 
                engineType={item.engineType} 
                engineSize ={item.engineSize}
                key={item.number}/>
            })
        }

            {buttonClick && <FormNew discard={discardRow} addItem={addNewCar} addValue={updateNewCar}/>}

        <NewRow click={addRowOnCLick} />

    </div>
  )
}
