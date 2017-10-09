import React, { Component } from 'react';
import Todo from './Todo';

class Todos extends Component {


  render() {
    console.log(this.props.store)

    const todos = this.props.store.getState().todos.map((todo, index) => {   //Store now has the updated state with the texts. this.props.store.getState() is an array of objects with the key text and values of whatever you typed in ever. [{text:"hey"},{text:"nm"},{text:"cool"}]
      return <Todo key={index} text={todo.text} /> // Iterating through each object and passing text prop to child in Todo.js with value of text for each instance.
    });

    return(
      <ul>
        {todos}
      </ul>
    );
  }
};

export default Todos;
