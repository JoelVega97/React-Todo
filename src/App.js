import React from 'react';
import './components/Todo.css'

import ToDoList from './components/TodoList'
import ToDoForm from './components/TodoForm'

const toDoData = [
  {
    task: 'Learn Class React',
    id: 1528817077286,
    finished: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      todos: toDoData
    }
  }


  toggleFinished = (clickedToDoId) => {

    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === clickedToDoId) {
          return {
            ...todo, 
            finished: !todo.finished
          }
        } else {
          return todo;
        }
      })
    })

  }



  addToDo = (todoname) => {
    const newToDo = {
      task: todoname,
      id: Date.now(),
      finished: false
    }

    this.setState({
      todos: [...this.state.todos, newToDo]
    })
  }

  clearList = () => {
    this.setState({
      //take away the todos that have itemfinished
      todos: this.state.todos.filter((todo) => {
        if (todo.finished === false){
          return todo
        }
      })
    })
  }


  render() {
    return (
      <>
      <div>
        <h1>ToDo List App: MVP</h1>
        <ToDoList list = {this.state.todos} toggleFinished = {this.toggleFinished}/> 
      </div>
       
      <div>
        <ToDoForm addToDo = {this.addToDo} clear = {this.clearList} />
      </div> 
      </>
    );
  }
}

export default App;
