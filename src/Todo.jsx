import React from "react"
function Todo({t,toggle,i}){
    return (
        <div>
            <li className={t.status?'blueback':'redback'}>
                 {t.title}
                 {/*{t.status?(<button onClick={()=>{toggle(i)}}>Undo</button>):(<button onClick={()=>{toggle(i)}}>Done</button>)}*/}
                 <button onClick={()=>{toggle(i)}}>{t.status?"Undo":"Done"}</button>
            </li>
        </div>
    )
}
export default Todo