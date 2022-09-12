import React from 'react';
import './App.css';
import Counter from './Counter'
import Todolist from './Todolist';
import Counter2 from './Counter2';
import Counter3 from './Counter3';
import Comp1 from './Comp1';
import MyContext from './MyContext'
import EventHandling from './EventHandling';
import ConditionalStyle from './ConditionalStyle';
import ConditionalClass from './ConditionalClass';
import Todolistwithstatus from './Todolistwithstatus';
import CounterClass from './CounterClass';
import TodolistClass from './TodolistClass';


function App() {
  const [firstname,SetFirstname] = React.useState('sowmya')
  return (
    <MyContext.Provider value="Deepu">
    <div className="betterview">
      <TodolistClass></TodolistClass>
      <CounterClass></CounterClass>
      <Todolistwithstatus></Todolistwithstatus>
      <ConditionalClass></ConditionalClass>
      <ConditionalStyle></ConditionalStyle>
      <EventHandling></EventHandling>    
      <h1 className='betterview'>Welcome to React Application development</h1>
      <Comp1 fn={firstname}></Comp1>
      <Counter2></Counter2>
      <Counter3></Counter3>
      <Todolist></Todolist>
      <Counter></Counter> 
    </div>
    </MyContext.Provider>
  );
}

export default App;
