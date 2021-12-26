import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import {UseCounter} from '../../hooks/UseCounter'

import "../02-useEffect/Effects.css"


export const MemoHook = () => {

    const {counter,incrementar}=UseCounter(1000);

    const [show, setShow] = useState(true)

    const memoProcesoPesado=useMemo(() => procesoPesado(counter),[counter])

    return (
        <div>
            <h1>Memo hook </h1>
            <h3>Counter: <small>{counter}</small> </h3>
            <hr/>

            <p>{memoProcesoPesado}</p>

            <button className="btn btn-primary" onClick={incrementar}>incrementar</button>

            <button className="btn btn-danger" onClick={()=>{setShow(!show)}}>show/hide {JSON.stringify(show)}</button>

        </div>
    )
}