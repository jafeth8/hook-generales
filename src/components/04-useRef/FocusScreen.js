import React, { useRef } from 'react'
import "../02-useEffect/Effects.css"
export const FocusScreen = () => {

    const refForm = useRef();

    console.log(refForm);

    const handleClick=()=> {
        //document.querySelector('input').select();
        refForm.current.select();
        console.log(refForm)
    }

    return (
        <div>
            <h1>UseRef</h1>
            <hr/>
            <input type="text" placeholder="tu nombre" className="form-control" ref={refForm}/>

            <button className="btn btn-primary mt-5" onClick={handleClick}>seleccionar input</button>
        </div>
    )
}
