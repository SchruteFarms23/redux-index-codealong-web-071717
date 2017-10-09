export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: state.todos.concat(action.todo) } //Add the {text: "" } from CreateTodo to the state array here. So if dispatch is ADD_TODO this is what happens.
    default:
      return state;
  }
}

//Go to Todos.js next 
