import React from "react";
import {useCounter} from './hooks'
function Counter2(){
    var [count,inc,dec] = useCounter()
    return(
        <div className="betterview">
            <h1>Count:{count}</h1>
            <button onClick={inc}>Inc</button>
            <button onClick={dec}>Dec</button>
        </div>
    )
}

export default Counter2;