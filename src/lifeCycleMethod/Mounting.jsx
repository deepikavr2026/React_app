import React from "react";

class MountCounter extends React.Component {
    constructor(props){
        super(props);
        this.state-{
             count: 0
        };
       console.log("1. Constructor");
    }
    componentDidMount(){
        console.log("3. Component Did Mount");
    }
    render(){
        console.log("2. Render");
        return(
            <h1>Count: {this.state.count}</h1>
        );
    }   
}

export default MountCounter