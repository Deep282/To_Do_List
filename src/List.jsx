import React, {useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import './index.css'

const List = (props) =>{

const [line, setLine] = useState(false);

const ToCut = () =>{

    setLine(true)
}


return (
<>
<div className = 'list_style'>
<span onClick = {ToCut} >
<DeleteIcon className = 'delete_item'/>
</span>
<li style ={{  textDecoration: line ? 'line-through' : 'false' }}>{props.text}</li>

</div>
</>
)
}


export default List;