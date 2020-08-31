import React from 'react';

import ToDoList from './components/TodoList'

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



  //addToDo



  render() {
    return (
      <div>
        <h1>ToDo List App: MVP</h1>
        <ToDoList list = {this.state.todos} toggleFinished = {this.toggleFinished}/> 

      {/*  
      <div>
        <ToDoForm addToDo = {this.addToDo}
      </div>
        
      */}
      </div> 
    );
  }
}

export default App;
