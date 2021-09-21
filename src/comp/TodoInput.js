import React from 'react'

function TodoInput({ todos, setTodos, setData, data, setStatus}) {
    function handleChange(e){
        setTodos(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        setData([
            ...data,
            {
                text: todos, completed:false, id: Math.random()*1000
            }
        ])
        setTodos("")
    }

    function statusHandler (e) {
        setStatus(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={todos} onChange={handleChange} />
            <button className= "todo-buttton" type="submit" >
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name= "todos" className="filter-todo">
                    <option value="all"> All </option>
                    <option value="completed"> Completed </option>
                    <option value="uncompleted"> Uncompleted </option>
                </select>
            </div>
        </form>
    )
}

export default TodoInput
