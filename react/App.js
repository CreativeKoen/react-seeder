import React from 'react';
// import 'babel-polyfill';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
// const
import Routes from './shared/Routes';
import store from './Store';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });


render(
  <Provider store={store}>
    <Router history={appHistory}>
      {Routes}
    </Router>
  </Provider>,
  document.getElementById('react-app')
);
