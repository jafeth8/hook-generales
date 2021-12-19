import React, { useState } from 'react'
import "./counter.css"
export const CounterApp = () => {

    const [states, setstate] = useState({state1:1,state2:2,state3:3,state4:4})
    const {state1,state2}=states
       
    return (
        <>
          <h1>counter1: {state1} counter2: {state2}</h1>
          <hr/>
          <button 
          className="btn btn-primary" 
          onClick={
              ()=>{
                //setstate({state1:state1+1,state2:state2})
                setstate({...states, state1:state1+1})      
              }
            }
          >
            incrementar state1
          </button>

          <button 
          className="btn btn-primary" 
          onClick={
              ()=>{
                //setstate({state1:state1,state2:state2+1})
                setstate({...states, state2:state2+1})          
              }
            }
          >
            incrementar state2
          </button>
          
        </>
    )
}
