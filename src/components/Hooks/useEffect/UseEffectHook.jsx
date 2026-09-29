// UseEffect is react hook used to perform side effecs in a functional components

// Syntax
// import { useEffect } from "react";

// useEffect(()=>{
//     //code
// },[])


import React, { useEffect } from 'react'

const UseEffectHook = () => {
    useEffect(()=>{
        console.log("Component Mounting");
        
    },[])
  return (
    <div>UseEffectHook</div>
  )
}

export default UseEffectHook