// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAll } from './Blog.actions';

import PostList from '../Post/Post.list';

@connect( (store) => {
  return {
    posts: store.BlogReducer.posts,
    status: store.BlogReducer.status
  }
})
class BlogContainer extends Component<void, BlogProps, void> {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log(this.props);
    this.props.dispatch(getAll());
  }

  render(): ?React$Element<any> {
    let data;
    let { status, posts } = this.props;
    if (status == 'Success') {
      data = <PostList posts={posts} />
    }
    return (
      <div className="container">
        <div className="page-header">
          <h1>React Blog</h1>
          <small className="text-muted">status:&nbsp;{status}</small>
        </div>
        <div className="row">
          {data}
        </div>
      </div>
    )
  }
}

export default BlogContainer;
