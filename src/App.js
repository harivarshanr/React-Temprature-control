import './App.css';
import { useState } from 'react';

function App() {

const[count,setCount]=useState(0)
const[temp,setTemp]=useState("cold")
const handleAdd=()=>{
  const a=count+1;
  setCount(a)
  if(a>15)
  {
    setTemp("hot")
  }

}
const handleSub=()=>{
  const b=count -1
  setCount(b)
  if(b<15)
  {
    setTemp("cold")

  }
  }

  return (
    <div className="app-container">
      <div className='temperature-display-container'>
      <div className={`temperature-display ${temp}`}>{count}°</div>
      </div>
      <div className='button-container'>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSub} >-</button>
      </div>
      </div>
  );
}

export default App;
