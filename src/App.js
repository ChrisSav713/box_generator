import React, { useState} from 'react'
import Box from './Box';
import { v4 as uuidv4 } from 'uuid'
import './style.css'

function App() {
  const [boxes, setBoxes] = useState(defaultBoxes);

  function handleBoxAdd() {
    const newBox = {
      id: uuidv4(),
      color: document.getElementById("color").value, 
      size: document.getElementById("size").value
    }
    
    setBoxes(prevState => [...prevState, newBox])
  }

  const allboxes = boxes.map(box => (<Box key={box.id} box={box}/>))

  return (
    <div className="Container">
      <label>Color</label>
      <input type="text" id="color"></input>
      <label>Size</label>
      <input type="text" id="size"></input>
      <button 
        onClick={handleBoxAdd}>
          Add Box
      </button>
      <hr></hr>
      <div id="box-container">
        {allboxes}
      </div>
    </div>
  );
}

const defaultBoxes = [{
  id:uuidv4(),
  color:"blue",
  size:100
},
{
  id:uuidv4(),
  color:"red",
  size:100
}]

export default App;
