import React, { useState } from 'react'
import ToDoItem from '../TodoItem.js/ToDoItem'
import "./TodoList.css"

function TodoList(props) {
    const [todos, setTodos] = useState(props.todos)

    const todoDeleter = (todo) => {
        const newTodos = todos.filter(((todo, key) => {
            key !== ToDoItem.key
        }))
        setTodos(newTodos)
    }
    
    return (
        <div className="row mt-4">
            <div className="col-md-6 offset-md-3 ul-container">
            <ul>
                {props.todos.map((todo, index) => {
                    console.log(ToDoItem)
                    return (<ToDoItem key={index} todo={todo} onDelete={todoDeleter(todos)}/>)
                })} 
            </ul>
            </div>
        </div>
    )
}

export default TodoList
