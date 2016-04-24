'use strict'
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from '../pages/Home';

export default (
  <Route path="/">
    <IndexRoute component={Home}></IndexRoute>
  </Route>
)
