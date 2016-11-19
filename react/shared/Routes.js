'use strict'
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import BlogContainer from '../Blog/Blog.container';
import PostContainer from '../Post/Post.container';

//import AdminBlogContainer from '../Admin/Blog/Blog.browse.container';

export default (
  <Route path="/">
    <IndexRoute component={BlogContainer}></IndexRoute>
    <Route path="/:postID" component={PostContainer}></Route>
    // <Route path="/admin/blog" component={AdminBlogContainer}></Route>
  </Route>
)
