// @flow
import axios from 'axios';
export const FETCH_POST_SUCCESS: string = 'FETCH_POST_SUCCESS';
export const FETCH_POST_PENDING: string = 'FETCH_POST_PENDING';
export const FETCH_POST_ERROR: string   = 'FETCH_POST_ERROR';

export function getAll(): ThunkAction {
  return function(dispatch: Dispatch): void {

    dispatch(getPostsPending());

    axios.get('http://localhost:3000/posts')
      .then( (res) => {
        dispatch(getPostsSuccess(res.data));
      })
      .catch( (res) => {
        dispatch(getPostsError(res.data));
      });
    }
}

export function getPostsSuccess(payload: Array<BlogPost>): BlogAction {
  return {
    type: FETCH_POST_SUCCESS,
    payload,
    status: 'Success'
  };
}

export function getPostsError(payload: Array<BlogPost> | Object): BlogAction {
  return {
    type: FETCH_POST_ERROR,
    payload,
    status: 'error'
  };
}

export function getPostsPending(payload: Object = {}): Object {
  return {
    type: FETCH_POST_PENDING,
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
