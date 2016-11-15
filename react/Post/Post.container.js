'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAll, getPostSuccess, posts } from './Post.actions';

import PostList from './Post.List';

@connect( (store) => {
  return {
    posts: store.PostReducer.posts,
    status: store.PostReducer.status
  }
})
export default class PostContainer extends Component {
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
          <h1>posts</h1><small className="text-muted">{status}</small>
        </div>
        <div className="row">
          <PostList posts={posts} />
        </div>
      </div>
    )
  }
}
