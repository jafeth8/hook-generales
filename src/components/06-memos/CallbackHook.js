import React, { useCallback, useState } from 'react';

import { ShowIncrement } from './ShowIncrement';

import "../02-useEffect/Effects.css";

const CallbackHook = () => {

    const [counter, setCounter] = useState(1)
    
    /*const incrementar=() => {
        setCounter(counter+1);
    }*/

    //const incrementar=useCallback(()=>{setCounter(counter+1)},[setCounter])//se puede decir que counter es un valor extraido idependiente por eso me pide agregarlo en las dependecias de la funcion
    
    const incrementar=useCallback((num)=>{setCounter(c=>c+num)},[setCounter])//forma correcta

    return (
        <div>
            <h1>UseCallback Hook: {counter}</h1>
            <hr/>
            
            <ShowIncrement increment={incrementar}/>
        </div>
    )
}

export default CallbackHook
