import React from 'react'

const ToDo = (props) => {
    return (
        <div 
        onClick={() => props.toggleFinished(props.item.id)}
        className = {`item${props.item.finished ? 'finished' : ''}`}>
            <p>{props.item.task}</p>
        </div>
    )
}

export default ToDo