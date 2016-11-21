// @flow
import {
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR,
  FETCH_POST_PENDING
} from './Blog.actions';

const initialState = {
  posts: [],
  status: 'idle'
}

export default function BlogReducer(state: BlogState = initialState, action: BlogAction): BlogState {
  switch (action.type) {
    case FETCH_POST_SUCCESS:
      return Object.assign({}, state, {
        posts: action.payload,
        status: action.status
      });
    case FETCH_POST_ERROR:
      return Object.assign({}, state, {
        posts: action.payload,
        status: action.status
      });
    case FETCH_POST_PENDING:
      return Object.assign({}, state, {
        status: action.status
       });
    default:
      return state;
  }
}
