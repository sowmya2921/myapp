import React from "react";
import TodoClassComponent from "./TodoClassComponent";
class ClassComponentLifeCycle2 extends React.PureComponent{
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
    deleteTask = (id)=>{
        var temp = [...this.state.todos];
        temp.splice(id,1)
        this.setState({todos:[...temp]})
    }
    componentDidMount(){
        document.getElementById('d1').focus()
    }
    render(){
        return(
            <div className="betterview">
                <h1>Class Component LifeCycle 2</h1>
                <h1>TodolistClass</h1>
                <input id='d1' type="text" onChange={(e)=>{this.setState({newtask:e.target.value})}} />
                <button onClick={this.addtask}>Add Task</button>
                <ul>
                    {
                        this.state.todos.map((t,i)=>{
                            return(<TodoClassComponent t={t} id={i} key={i} deleteTask={this.deleteTask}></TodoClassComponent>)

                        })
                    }
                </ul>
            </div>
        )
    }
}
export default ClassComponentLifeCycle2