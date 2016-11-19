// @flow
import axios from 'axios';
export const FETCH_SINGLE_POST_SUCCESS = 'FETCH_SINGLE_POST_SUCCESS';
export const FETCH_SINGLE_POST_PENDING = 'FETCH_SINGLE_POST_PENDING';
export const FETCH_SINGLE_POST_ERROR   = 'FETCH_SINGLE_POST_ERROR';

export function getAll() {
  return function(dispatch, getState) {

    dispatch(getPostPending())

    return axios.get('http://localhost:3000/posts')
      .then( (res) => {
        dispatch(getPostSuccess(res.data))
      })
      .catch( (res) => {
        dispatch(getPostError(res.data))
      });
    }
}

export function show(id) {
  return function(dispatch) {

    dispatch(getPostPending())

    axios.get(`http://localhost:3000/posts/${id}`)
      .then( (res) => {
        dispatch(getPostSuccess(res.data))
      })
      .catch( (res) => {
        dispatch(getPostError(res.data))
      });
    }
}

export function getPostSuccess(payload) {
  return {
    type: FETCH_SINGLE_POST_SUCCESS,
    payload,
    status: 'Success'
  };
}

export function getPostError(payload) {
  return {
    type: FETCH_SINGLE_POST_ERROR,
    payload,
    status: 'error'
  };
}

export function getPostPending(payload = []) {
  return {
    type: FETCH_SINGLE_POST_PENDING,
    payload,
    status: 'Pending'
  };
}


// export function addTodo(text) {
//   return {
//     type: ADD_TODO,
//     payload: {
//       text,
//       type
//     }
//   };
// }
//
// export function completeTodo() {
//   return {
//     type: COMPLETE_TODO,
//     payload: {
//       id
//     }
//   };
// }
//
// export function removeTodo(id) {
//   return {
//     type: REMOVE_TODO,
//     payload: {
//       id
//     }
//   };
// }
