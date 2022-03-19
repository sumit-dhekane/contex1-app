import React, { useContext } from "react";
import Mycontext from "./Mycontext";

function UserDetails(){
          const watsappData = useContext(Mycontext)
    return(

        <center>
            <h1>userDetails</h1>
            <div>Name:{watsappData.userDetails.name}</div>
            <div>Age:{watsappData.userDetails.age}</div>
            <div>ADD:{watsappData.userDetails.add}</div>
            <div>Place:{watsappData.userDetails.place}</div>
           
        </center>
    )
}
export default UserDetails;