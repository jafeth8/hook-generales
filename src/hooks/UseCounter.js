import { useState } from "react"

export const UseCounter = (initialState=0) => {

    const [counter, setCounter] = useState(initialState)

    const incrementar=() => {
        setCounter(counter+1)
    }

    const resetear=() => {
        setCounter(initialState)
    }

    const decrementar=() => {
        setCounter(counter-1)        
    }

    return {counter,incrementar,resetear,decrementar}
    
}
