import React, { useContext } from "react";
import Mycontext from "./Mycontext";
function Status(){

    const status = useContext(Mycontext).status

    return( <center>
          <h1>status:{status.length}</h1>
          {status.map((Element)=>(<div>{Element}</div>))}
          </center>
    )
};
export default Status;