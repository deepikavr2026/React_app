import React from 'react'
import Child from './Child'

const Parent = () => {
    const Student = {
        Name:"Anu",
        Age:"20",
        Email:"anu@gmail.com"
    }
  return (
    <div>
        <Child Student = "student"/>
    </div>
  )
}

export default Parent