import React from 'react'
import TodoItems from './TodoItems'

function TodoList({data, setData, filteredTodos}) {
    return (
         <div className="todo-container">
            <ul className = "todo-list">
                {filteredTodos.map((todo) => (
                    <TodoItems 
                    todo = {todo} 
                    key = {todo.id} 
                    data={data} 
                    setData={setData}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList
    