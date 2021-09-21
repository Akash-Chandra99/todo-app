import React from 'react'

function TodoItems({todo, data , setData}) {
    const handleDelete = () => {
        setData(data.filter((el) => el.id !== todo.id))
    }
    const handleComplete = () => {
        setData(
            data.map( (item) => {
                
                if (item.id === todo.id) {
                    return {
                        ...item , completed : !item.completed,
                    }
                }
                return item
            } )
        )
    }
    return (
        <div className="todo">
            <li className="todo-item">{todo.text}</li>
            <button onClick={handleComplete} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={handleDelete} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default TodoItems

