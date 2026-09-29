import React from "react";

const UseStateHook = ()=>{
    const [cout,setCount]= useState(0)
    return(
        <div>
            <h1>Counter</h1>
            <p>Count:{count}</p>
            <button onClick= {()=>setCounnt(count + 1)}>Increment</button>
        </div>
    )   
    
}
export default UseStateHook