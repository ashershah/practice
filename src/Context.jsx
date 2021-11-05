import React, { createContext } from 'react';
import ContextConsumer from './ContextConsumer';
const FirstName = createContext();
const Age= createContext();
const Context = () =>{

    return(<>
    <FirstName.Provider value={'ashar'}>
    <Age.Provider value={'19'}>
    {/* here we can write parent node Like <A/> which includes childe Nodes so easily get in <C/> */}
    <ContextConsumer/>
    </Age.Provider> 
    </FirstName.Provider>
    
    </>)
};

export default Context;
export {FirstName,Age};