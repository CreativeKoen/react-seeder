import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';

import Logger from 'redux-logger';
import thunk from 'redux-thunk';

import PostReducer from './Post/Post.reducer';

const Reducer = combineReducers ({
  PostReducer
});

const store = createStore(Reducer, applyMiddleware( thunk, Logger() ));

export default store;
