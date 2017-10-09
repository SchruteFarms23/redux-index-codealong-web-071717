import React, { Component } from 'react';
import Todo from './Todo';

class Todos extends Component {


  render() {
    console.log(this.props.store)

    const todos = this.props.store.getState().todos.map((todo, index) => {
      return <Todo key={index} text={todo.text} />
    });

    return(
      <ul>
        {todos}
      </ul>
    );
  }
};

export default Todos;
