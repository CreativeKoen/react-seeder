'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAll, getPostSuccess, posts } from './Blog.actions';

import PostList from '../Post/Post.list';

@connect( (store) => {
  return {
    posts: store.BlogReducer.posts,
    status: store.BlogReducer.status
  }
})
export default class BlogContainer extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.dispatch(getAll());
  }

  render () {
    let { status, posts } = this.props;
    return (
      <div className="container">
        <div className="page-header">
          <h1>React Blog</h1><small className="text-muted">{status}</small>
        </div>
        <div className="row">
          <PostList posts={posts} />
        </div>
      </div>
    )
  }
}
