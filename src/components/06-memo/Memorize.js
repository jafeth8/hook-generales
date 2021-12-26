import React, { useState } from 'react'
import {UseCounter} from '../../hooks/UseCounter'

import "../02-useEffect/Effects.css"
import { Small } from './Small';

export const Memorize = () => {

    const {counter,incrementar}=UseCounter();

    const [show, setShow] = useState(true)

    return (
        <div>
            <h1>Counter: <Small value={counter} /> </h1>
            <hr/>
            
            <button className="btn btn-primary" onClick={incrementar}>incrementar</button>

            <button className="btn btn-danger" onClick={()=>{setShow(!show)}}>show/hide {JSON.stringify(show)}</button>

        </div>
    )
}
