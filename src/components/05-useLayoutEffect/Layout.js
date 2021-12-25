import React, { useLayoutEffect, useRef } from 'react'
import { UseFetch } from '../../hooks/UseFetch'
import {UseCounter} from '../../hooks/UseCounter'
import "./layout.css"
export const Layout = () => {

    const {counter,incrementar} =UseCounter(1);

    const {data}=UseFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    console.log(data);
    const {quote}= !!data && data[0];
    
    const pTag = useRef()

    useLayoutEffect(() => {
        //console.log("hey")
        console.log(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1> LayoutEffect </h1>
            <hr/>
                    
            <blockquote className="blockquote text-end">
                <p className="mb-3"ref={pTag} >{quote} </p>
            </blockquote>
            

            <button className="btn btn-primary" onClick={incrementar}> Siguiente Quote XD</button>

        </div>
    )
}