import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './counterSlice'
import { createAsyncThunk } from '@reduxjs/toolkit'

const CounterRtk = ()=> {
    const count = useSelector((state)=>state.counter.value)
    console.log("data",count);
    
    const dispatch = useDispatch()

    return(
        <div>
            count: {count} <br/>
            <button onClick={()=>dispatch(increment())}>increment</button>
        </div>
    )
}

export default CounterRtk


// createAsyncThunk

// createAsyncThunk is a redux toolkit function used to handle asynchronous operation such as API calls