import React from 'react'
import Form from './Form';
import TodoList from './TodoList';



export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286, 
          completed:false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  render() {
    const { todos } = this.state;
    return (
    
      <div>
        <h1>To Do List </h1>
        <TodoList todos={todos} />
        <Form/>
        <button>Clear</button>
      </div>
    )
  }
}
