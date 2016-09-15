'use strict';
import { GET_TODO, ADD_TODO, COMPLETE_TODO, todos } from '../Actions/Actions';

const initialState = {
  todos: []
}

export default function TodoReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TODO:
      return Object.assign({}, state, { todos: action.payload.todos });
    case ADD_TODO:
      return addTodoReducer(state, action);
    case COMPLETE_TODO:
      return completeTodoReducer(state, action);
    default:
      return state;
  }
}

function addTodoReducer(state, action) {
  var todo = action.payload;
  var lastTodo = state.todos[state.todos.length -1];

  todo.ID = lastTodo++;
  todo.completed = false;

  return Object.assign({}, state, { todos: [...state.todos, todo]});
}

function completeTodoReducer(state, action) {
  var id = action.payload.ID;
  return Object.assign({}, state, { todos: state.todos.map((todo) => {
      if(id == todo.ID) {
        return Object.assign({}, todo, { completed: true });
      }
    })
  });
}
