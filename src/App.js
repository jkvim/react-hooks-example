import React, { Component, Fragment } from 'react';
import './App.css';

import Counter from './Counter'
import Todo from './Todo'

class App extends Component {
  state = {
    showTodo: true
  }

  toggleTodoVisble = () => {
    this.setState((prevState) => {
      return {
        showTodo: !prevState.showTodo
      }
    })
  }

  render() {
    return (
      <Fragment >
        <Counter />
        <button onClick={this.toggleTodoVisble}>toggle todo</button>
        {this.state.showTodo && <Todo />}
      </Fragment >
    )
  }
}

export default App;
