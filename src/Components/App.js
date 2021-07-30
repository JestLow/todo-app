import React, { useState, useEffect } from "react"
import Header from "./Header/Header";
import Form from "./Form/Form";
import TodoList from "./TodoList/TodoList";

function App() {
  const [userInput, setUserInput] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])
  
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(item => (
          item.completed === true
          )))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(item => (
          item.completed === false
          )))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  useEffect(() => {
    filterHandler()
  }, [todos, status])


  return (
    <div className="container">
      <Header />
      <Form setTodos={setTodos} todos={todos} userInput={userInput} setUserInput={setUserInput} status={status} setStatus={setStatus} />
      <TodoList todos={filteredTodos} setTodos={setTodos} />
    </div>
  );
}

export default App;
