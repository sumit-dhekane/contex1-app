import React from 'react';
import UserDetails from './userDetails';
import Status from './status';
import Message from './message'
   
function Component2(){

    return(<React.Fragment>
            <UserDetails/>
            <Status/>
            <Message/>
        </React.Fragment>
    )
}
export default Component2;