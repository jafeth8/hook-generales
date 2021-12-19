import { useState } from "react"

export const UseCounter = (initialState=0) => {
    const [state, setState] = useState(initialState)

    const incrementar=(number=1) => {
        setState(state+number)
    }

    const resetear=() => {
        setState(initialState)
    }

    const decrementar=(number=1) => {
        setState(state-number)        
    }

    return {state,incrementar,resetear,decrementar}
    
}
