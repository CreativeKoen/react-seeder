'use strict'
import React from 'react';
import { Router, useRouterHistory } from 'react-router';
import { render } from 'react-dom';
import { createHashHistory } from 'history';
import Routes from './shared/routes';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

render(
  <Router history={appHistory}>
    {Routes}
  </Router>,
document.getElementById('react-app'));
