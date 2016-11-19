'use strict'
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import BlogContainer from '../Blog/Blog.container';
import PostContainer from '../Post/Post.container';

<<<<<<< HEAD
//import AdminBlogContainer from '../Admin/Blog/Blog.browse.container';
=======
// import AdminBlogContainer from '../Admin/Blog/Blog.browse.container';
>>>>>>> 9d8d2de979a48837f0dd03cd7c5985ae5ec140c8

export default (
  <Route path="/">
    <IndexRoute component={BlogContainer}></IndexRoute>
    <Route path="/:postID" component={PostContainer}></Route>
    {/* // <Route path="/admin/blog" component={AdminBlogContainer}></Route> */}
  </Route>
)
