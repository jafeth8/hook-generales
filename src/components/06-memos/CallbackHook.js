import React, { useState } from 'react';

import { ShowIncrement } from './ShowIncrement';

import "../02-useEffect/Effects.css";

const CallbackHook = () => {

    const [counter, setCounter] = useState(1)
    
    const incrementar=() => {
        setCounter(counter+1);
    }

    return (
        <div>
            <h1>UseCallback Hook: {counter}</h1>
            <hr/>
            
            <ShowIncrement increment={incrementar}/>
        </div>
    )
}

export default CallbackHook
