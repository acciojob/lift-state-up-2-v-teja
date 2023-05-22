
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {




  let [inputVal, setInputVal] = useState("");

  function handleInput(val) {
    setInputVal(val);
  
}

  
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <p>{ inputVal}</p>
        <Child setInputVal={handleInput}></Child>
    </div>
  )
}

export default App
