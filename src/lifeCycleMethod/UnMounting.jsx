import React from "react";

class UnMounting extends React.Component{
    
    componentWillUnmount(){
        console.log("Component is removed");
        
    }
    render(){
        return <h1>Counter</h1>
    }
}

export default UnMounting