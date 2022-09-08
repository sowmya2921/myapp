import React from 'react';
import './App.css';
import Counter from './Counter'
import Todolist from './Todolist';
import Counter2 from './Counter2';
import Counter3 from './Counter3';
import Comp1 from './Comp1';
import MyContext from './MyContext';

function App() {
  const [firstname,SetFirstname] = React.useState('sowmya')
  return (
    <MyContext.Provider value="Deepu">
    <div className="betterview">
      <h1>Welcome to React Application development</h1>
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
