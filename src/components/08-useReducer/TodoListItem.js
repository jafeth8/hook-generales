import React from 'react'
import PropTypes from 'prop-types'


export const TodoListItem = ({todo,index,handleToggle,handleDelete}) => {
    return (
        <li className="list-group-item">
            <p onClick={()=>handleToggle(todo.id)} className={ todo.done? "complete" : "" } >{index+1}. {todo.desc}</p>
            <button className="btn btn-danger" onClick={()=>handleDelete(todo.id)}>borrar</button>
        </li>
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    handleToggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
}


