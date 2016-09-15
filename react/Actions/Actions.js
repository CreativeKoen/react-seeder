export const GET_TODO = 'GET_TODO';
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

const todos = [
  {
    ID: 1,
    type: 'todo',
    text: 'check facebook',
    completed: true
  },
  {
    ID: 2,
    type: 'todo',
    text: 'go to archery training',
    completed: false
  },
  {
    ID: 3,
    type: 'todo',
    text: 'have fun',
    completed: false
  },
  {
    ID: 4,
    type: 'todo',
    text: 'prepare dinner',
    completed: false
  }
]

export function getTodos() {
  return {
    type: GET_TODO,
    payload: {
      todos
    }
  };
}

//export addTodo = (text) => {
export function addTodo(text, type) {
  return {
    type: ADD_TODO,
    payload: {
      text,
      type
    }
  };
}

export function completeTodo() {
  return {
    type: COMPLETE_TODO,
    payload: {
      id
    }
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    payload: {
      id
    }
  };
}
