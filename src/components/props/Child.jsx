import React from 'react'

const Child = (props) => {
  return (
    <div>
        Name is: {props.Student.Name}
        Age is: {props.Student.Age}
        Email is: {props.Student.Email}
    </div>
  )
}

export default Child