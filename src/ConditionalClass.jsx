import React from "react";
function ConditionalClass(){
    var [ar,setar] = React.useState([12,456,67,34,4578,81])
    return(
        <div className="betterview">
            <h1>ConditionalClass</h1>
            {
                ar.map((v,i)=>{
                    return(<li className={v%2?'blueback':'redback'}>
                        {v}
                        </li>)
                })
            }
        </div>
    )
}
export default ConditionalClass