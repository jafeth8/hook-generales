import React, { useState } from 'react'
import "../02-useEffect/Effects.css"
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

export const RealExampleRef = () => {

    const [show, setShow] = useState(true)

    const handleClick=()=> {
       setShow(!show);
    }



    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr/>
            
            {show?<MultipleCustomHooks/>:null}

            <button className="btn btn-danger mt-5" onClick={handleClick}>mostrar/ocultar</button>
        </div>
    )
}
