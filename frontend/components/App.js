import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <ul>
          <li>Walk Dawg</li>
          <li>Take Out Trash</li>
          <li>Work Out</li>
        </ul>

       <form>
        <input type="text"/>
        <button>Add</button>
        </form> 

       <button>Clear</button> 

      </div>
    )
  }
}
