'use strict'
import React from 'react';

//---------------------------------
//--- TODO implent redux router ---
//---------------------------------

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Todo from './pages/Todo';
import store from './Store';

render(
  <Provider store={store}>
    <Todo />
  </Provider>,
  document.getElementById('react-app')
);
