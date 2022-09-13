import React from "react";
class ClassComponentLifeCycle extends React.Component{
    constructor(){
        super()
        console.log("Counter Class Component constructor called")
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
    componentDidMount(){
        console.log("Counter Class Component componetDidMount called")
    }
    componentDidUpdate(){
        console.log("Counter Class Component componentDidUpdate called")
    }
    render(){
        console.log("Counter Class Component render called")
        return(
            <div className="betterview">
                <h1>Class Component LifeCycles</h1>
                <h1>Count:{this.state.Count}</h1>
                <button onClick={this.inc}>Inc</button>
                <button onClick={this.dec}>Dec</button>
            </div>      
        )
    }
}
export default ClassComponentLifeCycle