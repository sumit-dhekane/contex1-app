import React, { useContext } from "react";
import Mycontext from "./Mycontext";
function Message (){

    const message = useContext(Mycontext).message

    return(
        <React.Fragment>
         <h3>Message</h3>
        {message.map((element,index)=>(<div key= {index}>
            <div>sender:{element.sender}</div>
            <div>image:{element.Image}</div>
            <div>content:{element.content}</div>
        </div>))}
        </React.Fragment>
    )
}
export default Message;