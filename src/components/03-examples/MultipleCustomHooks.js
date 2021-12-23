import React from 'react'
import { UseFetch } from '../../hooks/UseFetch'
import {UseCounter} from '../../hooks/UseCounter'
import "../02-useEffect/Effects.css"
export const MultipleCustomHooks = () => {

    const {counter,incrementar} =UseCounter(1);

   
    //const state=UseFetch(`https://www.breakingbadapi.com/api/quotes/1`);
    //console.log(state);
    const {loading,data}=UseFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    console.log(data);
    const {quote,author}= !!data && data[0];
    //console.log(quote,author);

    return (
        <div>
            <h1> BreakingBad Quotes! </h1>
            <hr/>
            {
                loading 
                ?
                    (
                        <div className="alert alert-info text-center">
                            loading
                        </div>
                    )

                :

                    (
                        <blockquote className="blockquote text-end">
                            <p className="mb-3">{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
                    )

                
            }

            <button className="btn btn-primary" onClick={incrementar}> Siguiente Quote XD</button>

        </div>
    )
}
