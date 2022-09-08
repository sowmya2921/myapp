import React from "react";
import MyContext from "./MyContext";
function Comp2(props){
    var lname = React.useContext(MyContext)
    return(
        <div className="betterview">
            <h2>Component2</h2>
            <h1>{props.fname} {lname}</h1>
        </div>
    )
}

export default Comp2