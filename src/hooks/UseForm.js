import {useState} from 'react'

export const UseForm = (initialState={}) => {

    const [values, setValues] = useState(initialState);

    const reset=()=>{
        setValues(initialState);
    }

    const handleChange=({target})=>{
        //console.log(e.target.name)
        //console.log(e.target.value)
        setValues({
            ...values,
            [target.name]:target.value
        })
    }

    return [values, handleChange,reset]
    
}
