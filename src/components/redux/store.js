import {configureStore} from "@reduxjs/toolkit";
import counterReducer from'./counterSlice'
import  messageReducer from './messageSlice'
import userReducer from './userSlice'

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        message: messageReducer, 
        users: userReducer,
    }
})
