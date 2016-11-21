// @flow
import {
  FETCH_SINGLE_POST_SUCCESS,
  FETCH_SINGLE_POST_ERROR,
  FETCH_SINGLE_POST_PENDING,
} from './Post.actions';

const initialState = {
  type: 'idle',
  post: {},
  status: 'idle'
}

export default function PostReducer(state: PostState = initialState, action: PostAction): PostState {
  switch (action.type) {
    case FETCH_SINGLE_POST_SUCCESS:
      return Object.assign({}, state, {
        post: action.payload,
        status: action.status
      });
    case FETCH_SINGLE_POST_ERROR:
      return Object.assign({}, state, {
        post: action.payload,
        status: action.status
      });
    case FETCH_SINGLE_POST_PENDING:
      return Object.assign({}, state, {
        status: action.status
       });
    default:
      return state;
  }
}
