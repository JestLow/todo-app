import React from 'react'

function Form({ setTodos, todos, userInput, setUserInput, setStatus, status}) {
    const setFormValues = (e) => {
        setUserInput(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setTodos([...todos, {text: userInput, completed:false, id:Math.random() * 1000} ])
        setUserInput("")
    }

    const statusHandler= (e) => {
        setStatus(e.target.value)
    }

    return (
        <div className="row mt-5">
            <div className="col-md-6 offset-md-3">
                <form onSubmit={onSubmit}>
                    <div className="input-group mb-3">
                        <input onChange={setFormValues} id="todo-input" value={userInput} name="todo" type="text" className="form-control" />
                        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Ekle</button>
                        <select onChange={statusHandler} className="btn btn-mini btn-secondary ms-4">
                            <option>all</option>
                            <option>completed</option>
                            <option>uncompleted</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
