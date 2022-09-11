import React from "react";
function EventHandling(){
    function jch(x){
            console.log(x)
    }
    return(
        <div className="betterview">
            <h1>EventHandling</h1>
            <button onClick={jch}>Just calling Handler</button>
            <button onClick={()=>{alert("hello")}}>Another button</button>
            <button onClick={(ev)=>{jch(100)}}>Just Another Button</button>
        </div>
    )
}
export default EventHandling;