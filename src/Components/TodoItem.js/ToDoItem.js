import React from 'react'
import "./TodoItem.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

function ToDoItem(props) {
    return (
        <li className="li-container">
        <div>
            <p>{props.todo}</p>
            <button onClick={props.onDelete} className="btn btn-primary">Sil</button>
        </div>
        </li>
    )
}

export default ToDoItem
