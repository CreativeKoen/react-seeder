import {
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR,
  FETCH_POST_PENDING,
  posts,
  post
} from './Blog.actions';

const initialState = {
  posts: [],
  status: 'idle'
}

export default function BlogReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST_SUCCESS:
      return Object.assign({}, state, {
        posts: action.payload,
        status: action.status
      });
    case FETCH_POST_ERROR:
      return Object.assign({}, state, {
        data: action.payload,
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
