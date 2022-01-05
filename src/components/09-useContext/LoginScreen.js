import React, { useContext } from 'react'
import { UserContext } from './UserContex'

export const LoginScreen = () => {
    const {setUser} = useContext(UserContext)
    const addUser=()=> {
        setUser({user:1234,name:'el prro'})
    }
    return (
        <div>
            <h1>Login Screen</h1>
            <hr/>
            
            <button className="btn btn-primary" onClick={addUser}>
                nuevo usuario
            </button>
        </div>
    )
}
