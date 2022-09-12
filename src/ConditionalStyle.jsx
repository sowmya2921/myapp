import React from "react";
function ConditionalStyle(){
    var [ar,setar] = React.useState([12,456,67,34,4578,81])
    return(
        <div className="betterview">
            <h1>Conditional Styling</h1>
            {
                ar.map((v,i)=>{
                    return(<li style={v%2===0?{backgroundColor:'lightgreen'}:{backgroundColor:'pink'}}>
                        {v}
                    </li>)
                })
            }
            
        </div>
    )
}

export default ConditionalStyle