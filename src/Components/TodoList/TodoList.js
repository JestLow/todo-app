import React from 'react'
import ToDoItem from '../TodoItem/ToDoItem'
import "./TodoList.css"

function TodoList({ todos, setTodos }) {
    return (
        <div className="row mt-4">
            <div className="col-md-6 offset-md-3 ul-container">
            <ul>
                {todos.map((todo) => {
                    return (<ToDoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />)
                })} 
            </ul>
            </div>
        </div>
    )
}

export default TodoList
