// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'

import ToDo from './Todo'

const ToDoList = props => {

    return (
        <div className = 'To-Do-List'>
            {props.list.map((todo) => (
                <ToDo
                key = {todo.id}
                item = {todo}
                toggleFinished = {props.toggleFinished}
                />
            ))}
        </div>
    )

}

export default ToDoList