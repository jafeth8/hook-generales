import React, { useEffect, useReducer } from 'react'
import { UseForm } from '../../hooks/UseForm'

import "./styles.css"
import { todoReducer } from './todoReducer'

export const TodoApp = () => {

    const init=() => {
        /*return [
            {
                id:new Date().getTime(),
                desc:'aprender laravel',
                done: false
            }
        ]*/
        return JSON.parse(localStorage.getItem("tareas")) || []
    }

    const [todos, dispatch] = useReducer(todoReducer, [] ,init)

    const [{description}, handleChange, reset]=UseForm({description:''});
    
    console.log(description);
    
    useEffect(() => {
        localStorage.setItem("tareas",JSON.stringify(todos))
    },[todos])

    const handleDelete=(todoId) => {

        const action={
            type: "delete",
            payload:todoId,
        }

        dispatch(action);
    }

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

        const action={
            type:'add',
            payload:newTodo
        }

        dispatch(action);

        reset();


    }

    return (
        <div>
            <h1>TodoApp: ({todos.length}) </h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {
                            todos.map((todo,i)=>(
                                <li className="list-group-item" key={todo.id}>
                                    <p className="text-center">{i+1}. {todo.desc}</p>
                                    <button className="btn btn-danger" onClick={()=>handleDelete(todo.id)}>borrar</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="col-5">
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
                </div>

            </div>

        </div>
    )
}
