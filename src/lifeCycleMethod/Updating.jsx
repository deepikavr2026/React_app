import React from "react";

class UpdatingCounter extends React.Component {
    constructor(props){
        this.super(props);
        this.state-{
            count: 0
        };
    }
    componentDidUpdate(){
        console.log("Component Updated");  
    }
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>

                <button
                    onClick={()=>
                        this.setState({
                            count: thiis.state.count+1
                        })
                    }
                    >
                        Increase
                    </button>
            </div>
        );
    }
}

export default UpdatingCounter