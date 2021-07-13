import React from 'react'

function Form(props) {
    return (
        <div className="row mt-5">
            <div className="col-md-6 offset-md-3">
                <form onSubmit={props.onSubmit}>
                    <div className="input-group mb-3">
                        <input onChange={props.onInputChange} id="todo-input" type="text" className="form-control" />
                        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Ekle</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
