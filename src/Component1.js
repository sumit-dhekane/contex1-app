import React, { useContext } from "react";
import Mycontext from "./Mycontext";
import Componen2 from './Component2'

function Component1(){
     const watsappData={
              userDetails:{name:'sumit',age:30,add:'iudp coloney washim',place:'washim'},
              status:["sumit","parikshhit","shree","monya","rahul"],
              message:[
                    {
                        sender:'parikshit',
                        Image: 'godImage',
                        content:'shree krishna image'

                    },
                    {
                        sender:'shree',
                        Image: 'godImage',
                        content:'swami image'


                    },
                    {
                        sender:'monya',
                        Image: 'lafdimage',
                        content:'rutuja image'

                    },
                    {
                        sender:'rahul',
                        Image: 'godImage',
                        content:'shree krishna image'

                    }
                
              ]
     }
return(
    <Mycontext.Provider value={watsappData}>
     <Componen2/>
    </Mycontext.Provider>


)

}
export default Component1;