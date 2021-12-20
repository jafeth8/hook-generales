import React, { useEffect, useState } from 'react'

export const Message = () => {
    
    const [coords, setCoords] = useState({x:0, y:0});

    const {x, y} = coords;

    const eventoRaton=(e)=>{
        const coords={x:e.x,y:e.y};
        setCoords(coords);
        //console.log(cors)
        //console.log(":D")
    }

    useEffect(() => {
        //console.log("componente montado");
        window.addEventListener('mousemove',eventoRaton)
        return () => {
            //console.log("componente desmontado");
            window.removeEventListener('mousemove',eventoRaton)
        }
    }, [])

    return (
        <div>
            <h3>La practica hace al maestro!</h3> 
            <p>{`x: ${x} y: ${y}`}</p>      
        </div>
    )
}
