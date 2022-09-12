import React from "react";
class CounterClass extends React.Component{
    constructor(){
        super()
        this.state={
            Count:0
        }
    }
    inc=()=>{
        this.setState({Count:this.state.Count+1})
    }
    dec=()=>{
        this.setState({Count:this.state.Count-1})
    }
    render(){
        return(
            <div className="betterview">
                <h1>Count:{this.state.Count}</h1>
                <button onClick={this.inc}>Inc</button>
                <button onClick={this.dec}>Dec</button>
            </div>      
        )
    }
}
export default CounterClass