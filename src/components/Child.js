
import React from "react";


const Child = ({setInputVal}) => {
    


    return (
        <div className="child">
            <h1>Child Component</h1>
            <input type="text" onChange={(event)=>setInputVal(event.target.value)} ></input>
        </div>
        
    )
}



export default Child