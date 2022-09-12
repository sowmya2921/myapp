import React from "react";
import TodoClass from './TodoClass';
class TodolistClass extends React.Component{
    constructor(){
        super();
        this.state={
            todos:['apple','mango','banana','watermelon'],
            newtask:''
        }
    }
    addtask=()=>{
        this.setState({todos:[...this.state.todos,this.state.newtask]})
    }
    render(){
        return(
            <div className="betterview">
                <h1>TodolistClass</h1>
                <input type="text" onChange={(e)=>{this.setState({newtask:e.target.value})}} />
                <button onClick={this.addtask}>Add Task</button>
                <ul>
                    {
                        this.state.todos.map((t,i)=>{
                            return(<TodoClass t={t}></TodoClass>)

                        })
                    }
                </ul>
            </div>
        )
    }
}
export default TodolistClass