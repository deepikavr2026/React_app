
import React from "react";
import {Link} from 'react-router-dom'

const LinkComponent = ()=>{
    return(
        <div>
            <ul>
                <Link to={'/home'}>Home</Link>
                <Link to={'/about'}>About</Link>
            </ul>
        </div>
    )
}

export default LinkComponent
