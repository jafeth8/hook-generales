import React from 'react'
import { UseCounter } from '../../hooks/UseCounter'
import "./counter.css"
export const CounterWithCustomHook = () => {

    const {state,incrementar,resetear,decrementar}= UseCounter(100)

    return (
        <>
         <h1>Counter with hook: {state}</h1>
         <hr/>
         <button className="btn btn-primary" onClick={() => {incrementar(5)}}> +1 </button>
         <button className="btn btn-danger" onClick={resetear}> reset </button>
         <button className="btn btn-warning" onClick={()=>{decrementar()}}> -1 </button>   
        </>
    )
}
