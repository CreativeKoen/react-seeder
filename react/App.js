import React from 'react';
// import 'babel-polyfill';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import PostContainer from './Post/Post.container';

import store from './Store';

render(
  <Provider store={store}>
    <PostContainer />
  </Provider>
  ,document.getElementById('react-app')
);
