import React, { useState } from "react"
import Header from "./Header/Header";
import Form from "./Form/Form";
import TodoList from "./TodoList.js/TodoList";
import ToDoItem from "./TodoItem.js/ToDoItem";

function App() {
  const [todoItem, setTodoItem] = useState()
  const [todos, setTodos] = useState([])
  
  const inputChange = (e) => {
    setTodoItem(e.target.value)
  }

  const addTodo = (e) => {
    e.preventDefault()
    setTodos(prev => [...prev, todoItem])
    console.log(e)
    setTodoItem("")
    document.getElementById("todo-input").value = ""
  }
  
  /*const todoDeleter = (todos) => {
    const newTodos = todos.filter((todo, key) => {
      key !== todo.key
    } )
  }
*/
  return (
    <div className="container">
      <Header />
      <Form onInputChange={inputChange} onSubmit={addTodo} />
      <TodoList todos={todos} /*todoDeleter={this.todoDeleter(todos)}*/ />
    </div>
  );
}

export default App;
