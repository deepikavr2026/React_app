import React, { useState } from 'react'

const ChangeBackground = () => {
    const [color, setColor] = useState("red")
    const changeColor = ()=>{
        setColor("Blue");
    };
    
  return (
    <div>
        style={{
            textAlign : "center",
            paddingTop : "50px",
        }}
        <h2>Background color : {color}</h2>

        <button onClick={changeColor}></button>
    </div>
  );
}

export default ChangeBackground