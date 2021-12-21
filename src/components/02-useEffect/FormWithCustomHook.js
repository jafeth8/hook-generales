import React, { useEffect } from 'react'
import { UseForm } from '../../hooks/UseForm';
import "./Effects.css"


export const FormWithCustomHook = () => {

    const [valuesForm,handleChange]=UseForm({name:'',email:'',password:''})
    const {name,email,password} = valuesForm;

    useEffect(() => {
        console.log("email cambio")
    }, [email])

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(valuesForm)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
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

            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    placeholder="*****"
                    autoComplete="off"
                    className="form-control"
                    value={password}
                    onChange={handleChange}
                />
            </div>

            <button type="submit" className="btn btn-primary"> Guardar </button>

        </form>
    )
}