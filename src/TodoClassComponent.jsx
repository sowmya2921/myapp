import React from "react";
class TodoClassComponent extends React.Component{
    constructor(props){
        super()
        console.log(props.t,"Todo constructor called")
    }
    componentDidMount(){
        console.log(this.props.t,"Todo componentDidMount called")
    }
    componentDidUpdate(){
        console.log(this.props.t,"Todo componentDidUpdate called")
    }
    componentWillUnmount(){
        console.log(this.props.t,"Todo componentWillUnmount called")
    }
    render(){
        console.log(this.props.t,"Todo render called")
        return(
            <li>
                {this.props.t}
                <button onClick={()=>{this.props.deleteTask(this.props.id)}}>Delete</button>
            </li>
        )
    }
}
export default TodoClassComponent