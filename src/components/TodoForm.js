import React from 'react'

class TodoForm extends React.Component{

    constructor(){
        super()
        this.state = {
            todo: ''
        }
    }

    changes = (evt) => {
        this.setState(({ todo: evt.target.value }))
    }
    
    Submit = (evt) => {
        evt.preventDefault()
        this.props.addToDo(this.state.todo)
        this.setState({
            todo: ''
        })
    }

    Clear = evt => {
        this.props.clear(this.state.todo)
    }

    render() {
        return (
            <form onSubmit = {this.Submit}>
                <input 
                  type = 'text'
                  name = 'todo'
                  placeholder = 'What you need to do?'
                  value = {this.state.todo}
                  onChange = {this.changes}
                />
                <button>Add To Do</button>
                <button onClick = {this.Clear} >Clear Completed Tasks</button>
            </form>
        )
    }

}

export default TodoForm