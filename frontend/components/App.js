import React from 'react'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286, 
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: true
        }
      ]
    }
  }

  render() {
    const { todos } = this.state;
    console.log(todos)
    return (
      <div>
        <h1>To Do List</h1>
        <ul>
          {
            todos.map( todo=>{
              return (<li>{todo.task} {todo.completed? <span>--Completed--</span>:<span></span>}</li>)
            })
          }
        </ul>

        <form>
          <input type="text" />
          <button>Add</button>
        </form>

        <button>Clear</button>

      </div>
    )
  }
}
