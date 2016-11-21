import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';

import Logger from 'redux-logger';
import thunk from 'redux-thunk';

import BlogReducer from './Blog/Blog.reducer';
import PostReducer from './Post/Post.reducer';

const RootReducer = combineReducers ({
  BlogReducer,
  PostReducer
});

const store = createStore(RootReducer, applyMiddleware( thunk, Logger() ));

export default store;
