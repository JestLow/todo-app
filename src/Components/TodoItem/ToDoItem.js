import React from 'react'
import "./TodoItem.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

function ToDoItem({ todo, todos, setTodos }) {
    const handleDeleter = () => {
        setTodos(todos.filter((item) => (
            item.id !== todo.id
        )))
    }

    const completeHandler= () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    
    }
    return (
        <li className="li-container">
        <div className={`d-flex ${todo.completed ? "completed-todo" : null}`}>
            <p>{todo.text}</p>
            <button onClick={completeHandler} className="btn btn-secondary justify-content-end">Completed</button>
            <button onClick={handleDeleter} className="btn btn-primary justify-content-end ms-3 me-2">Sil</button>
        </div>
        </li>
    )
}

export default ToDoItem
