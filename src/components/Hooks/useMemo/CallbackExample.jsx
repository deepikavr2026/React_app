import React, { useCallback } from 'react'

const fun = new Set()
function Callback(){

    const [counter, setCount]=usestate(0)
    const [counter1, setCount2]=usestate(0)

    const increment = useCallback(()=>{
        setCount(counter + 1)
    },[counter])

    const decrement = useCallback(()=>{
        setCount(counter - 1)
    },[counter])

    const increment2 =useCallback(()=>{
        setCount(counter1 + 1)
    },[counter1])

    fun.add(increment)

    return(
        <div>
            <h2>Counter:{counter}</h2>
            <button onlick={increment}>Increment</button>
            <button onlick={decrement}>Decrement</button>
            <h2>Counter2:{counter1}</h2>
            <button onlick={increment2}>increment2</button>
        </div>
    )
}

   
export default Callback