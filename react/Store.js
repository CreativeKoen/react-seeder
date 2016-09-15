'use strict';
import { createStore, combineReducers } from 'redux';

import TodoReducer from './Reducers/TodoReducer'


let Reducer = combineReducers ({
  TodoReducer
});

let store = createStore(Reducer);

export default store;
