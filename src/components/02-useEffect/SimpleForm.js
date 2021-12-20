import React, { useEffect, useState } from 'react'
import "./Effects.css"
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({name:'',email:''})
    const {name,email}=formState;

    const handleChange=({target})=>{
        //console.log(e.target.name)
        //console.log(e.target.value)
        setFormState({
            ...formState,
            [target.name]:target.value
        })
    }

    useEffect(()=>{
        console.log("hey")
    },[])

    useEffect(()=>{
        //console.log("formState")
    },[formState])

    useEffect(()=>{
        //console.log("email")
    },[email])

    return (
        <>
            <h1>UseEffect</h1>
            <hr/>

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    placeholder="tu nombre"
                    autoComplete="off"
                    className="form-control"
                    value={name}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    placeholder="correo@gmail.com"
                    autoComplete="off"
                    className="form-control"
                    value={email}
                    onChange={handleChange}
                />
            </div>

            {name==="888" && <Message/>}
        
        </>
    )
}
