// @flow
import axios from 'axios';
export const FETCH_SINGLE_POST_SUCCESS: string = 'FETCH_SINGLE_POST_SUCCESS';
export const FETCH_SINGLE_POST_PENDING: string = 'FETCH_SINGLE_POST_PENDING';
export const FETCH_SINGLE_POST_ERROR: string   = 'FETCH_SINGLE_POST_ERROR';

export function show(id: number): ThunkAction {
  return function(dispatch: Dispatch): void {

    dispatch(getPostPending({}))

    axios.get(`http://localhost:3000/posts/${id}`)
      .then( (res) => {
        dispatch(getPostSuccess(res.data))
      })
      .catch( (res) => {
        dispatch(getPostError(res.data))
      });
    }
}

export function getPostSuccess(payload: Post): PostAction {
  return {
    type: FETCH_SINGLE_POST_SUCCESS,
    payload,
    status: 'Success'
  };
}

export function getPostError(payload: Post | Object): PostAction {
  return {
    type: FETCH_SINGLE_POST_ERROR,
    payload,
    status: 'error'
  };
}

export function getPostPending(payload: Object = {}): Object {
  return {
    type: FETCH_SINGLE_POST_PENDING,
    payload,
    status: 'Pending'
  };
}
