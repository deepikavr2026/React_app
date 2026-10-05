import React, {useContext, useState} from 'react'
import React from 'react'
import UserContext from './UserContext'

const UserData = () => {
    const user = useContext(UserContext)
  return (
    <div>
        {user.name}<br/>
        {user.email}
    </div>
  )
}

export default UserData