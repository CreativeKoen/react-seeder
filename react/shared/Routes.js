'use strict'
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from '../pages/Home';
import Users from '../pages/Users';
export default (
  <Route path="/">
    <IndexRoute component={Home}></IndexRoute>
    <Route path="users" component={Users}></Route>
  </Route>
)
