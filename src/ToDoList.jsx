import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import List from './List';


const ToDoList = () =>
{

    const [item, setItem] = useState();
    const [newitem, setNewItem] = useState([]);
    
    const itemEvent= (event) =>{
            setItem(event.target.value)
    }

    const listOfItems = () => {
            setNewItem ((prevalue)=>{
                    return [...prevalue, item];
            });
            setItem("");    
    }

    return(
        <>
        
            <div className = "main_div">
                <div className = "center_div">
                    <br/>
                    <h1>ToDo List</h1>
                    <br/>
                    <input type= "text"
                     placeholder = 'Add an Item'
                    onChange = {itemEvent} 
                    value = {item}
                    />
                    
                   <Button className = "btn" onClick = {listOfItems}>
                     <AddIcon/>
                   </Button>
                   <br/>
                   <ol>
                  { newitem.map((val, index) =>{
                     return <List
                         text = {val}
                         key = {index}
                     /> 
                   })}
                    </ol>   
                   
                </div>

            </div>        
        
        </>

    )

}

export default ToDoList;