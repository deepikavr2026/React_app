import React, { useState } from "react";

function app(){
    const [isOn, setIsOn]=useState(false);
    const toggle=()=>{
        setIsOn(!isOn);
    };
    return(
        <div>
            <h2> {isOn ? "ON" : "OFF"}</h2>
            <button onClick={toggle}>
                {isOn ? "Turn OFF" : "Turn ON"}
            </button>
        </div>
    )
}
export default app