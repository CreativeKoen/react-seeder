import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';

import Logger from 'redux-logger';
import thunk from 'redux-thunk';

import BlogReducer from './Blog/Blog.reducer';
import PostReducer from './Post/Post.reducer';

const Reducer = combineReducers ({
  BlogReducer,
  PostReducer
});

const store = createStore(Reducer, applyMiddleware( thunk, Logger() ));

export default store;
