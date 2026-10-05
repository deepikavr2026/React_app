import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './counterSlice'

const CounterRtk = ()=> {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()

    return(
        <div>
            count: {count}
            <button onClick={()=>dispatch(increment())}>Add</button>
        </div>
    )
}

export default CounterRtk()