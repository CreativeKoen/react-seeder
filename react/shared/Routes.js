'use strict'
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import PostContainer from './Post/Post.container';

export default (
  <Route path="/">
    <IndexRoute component={PostContainer}></IndexRoute>
  </Route>
)
