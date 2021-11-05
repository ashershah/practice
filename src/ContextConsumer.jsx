import React, { useContext } from 'react';
import { FirstName,Age } from './Context';
const ContextConsumer = () =>{
    const fname = useContext(FirstName);
    const age = useContext(Age);

return(
    <>
<h>{fname}{age}</h>
    </>
)







            //secon methode to get Context

//     return(<>

// <FirstName.Consumer>
//     {(fname)=>{
//       return  <h1>hi my name is {fname}</h1>
//     }}
// </FirstName.Consumer>
//     </>);

}

export default ContextConsumer;