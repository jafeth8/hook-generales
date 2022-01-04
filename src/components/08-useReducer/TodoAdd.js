import React from 'react'
import { UseForm } from '../../hooks/UseForm';

export const TodoAdd = ({handleAddTodo}) => {
    const [{description}, handleChange, reset]=UseForm({description:''});

    const handleSubmit=(e)=> {
        e.preventDefault();

        if(description.trim().length<3){
            return;
        }
        
        const newTodo = {
            id:new Date().getTime(),
            desc:description,
            done: false
        }

        handleAddTodo(newTodo);
        reset();
    }

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input type="text" name="description" 
                placeholder="Aprender..." autoComplete="off" 
                className="form-control" value={description}
                onChange={handleChange}
                />

                <button className="btn btn-outline-primary mt-1 w-100" type="submit">
                    Agregar
                </button>
            </form>     
        </>
    )
}
