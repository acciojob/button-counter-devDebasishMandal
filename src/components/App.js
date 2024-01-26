
import React from "react";
import './../styles/App.css';
import {useState} from "react";
const App = () => {
  let [count,setCount]=useState(0);
  return (
    <div>
        <p>Button clicked {count} times</p>
            <button onClick={()=>{
                setCount(count=count+1)
            }}>Click Me</button>
    </div>
  )
}

export default App
